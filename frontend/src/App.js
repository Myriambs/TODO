import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Remplacez cette URL par l'URL de votre backend déployé
const API_URL = 'http://localhost:5000/api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  // Filtrer les tâches selon le statut sélectionné
  const filterTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  // Mettre à jour les tâches filtrées quand les todos ou le filtre changent
  useEffect(() => {
    setFilteredTodos(filterTodos());
  }, [todos, filter]);

  // Récupérer toutes les tâches
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setTodos(response.data);
      setError('');
    } catch (error) {
      console.error('Erreur lors de la récupération des todos:', error);
      setError('Impossible de charger les tâches. Vérifiez la connexion au serveur.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Ajouter une nouvelle tâche
  const addTodo = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    try {
      const response = await axios.post(API_URL, {
        text: inputValue,
        completed: false
      });
      setTodos([...todos, response.data]);
      setInputValue('');
      setError('');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la todo:', error);
      setError('Impossible d\'ajouter la tâche. Vérifiez la connexion au serveur.');
    }
  };

  // Supprimer une tâche
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
      setError('');
    } catch (error) {
      console.error('Erreur lors de la suppression de la todo:', error);
      setError('Impossible de supprimer la tâche. Vérifiez la connexion au serveur.');
    }
  };

  // Modifier le statut d'une tâche (complétée/non complétée)
  const toggleComplete = async (id, completed) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        completed: !completed
      });
      setTodos(todos.map(todo => 
        todo._id === id ? response.data : todo
      ));
      setError('');
    } catch (error) {
      console.error('Erreur lors de la modification de la todo:', error);
      setError('Impossible de modifier la tâche. Vérifiez la connexion au serveur.');
    }
  };

  // Commencer l'édition d'une tâche
  const startEdit = (todo) => {
    setEditingId(todo._id);
    setEditingText(todo.text);
  };

  // Annuler l'édition
  const cancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  // Sauvegarder les modifications
  const saveEdit = async (id) => {
    if (!editingText.trim()) return;

    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        text: editingText
      });
      setTodos(todos.map(todo => 
        todo._id === id ? response.data : todo
      ));
      setEditingId(null);
      setEditingText('');
      setError('');
    } catch (error) {
      console.error('Erreur lors de la modification de la todo:', error);
      setError('Impossible de modifier la tâche. Vérifiez la connexion au serveur.');
    }
  };

  // Compter les tâches actives
  const activeTodosCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="App">
      <div className="container">
        <h1>Ma Todo List</h1>
        
        <form onSubmit={addTodo} className="todo-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ajouter une nouvelle tâche..."
            className="todo-input"
          />
          <button type="submit" className="add-button">Ajouter</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {/* Filtres */}
        <div className="filters">
          <button 
            className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Toutes
          </button>
          <button 
            className={`filter-button ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Actives
          </button>
          <button 
            className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Complétées
          </button>
        </div>

        {/* Compteur de tâches actives */}
        <div className="todo-count">
          {activeTodosCount} tâche{activeTodosCount !== 1 ? 's' : ''} active{activeTodosCount !== 1 ? 's' : ''}
        </div>

        <div className="todo-list">
          {loading ? (
            <div className="loading">Chargement...</div>
          ) : filteredTodos.length === 0 ? (
            <p className="empty-message">
              {filter === 'all' 
                ? 'Aucune tâche pour le moment' 
                : filter === 'active' 
                  ? 'Aucune tâche active' 
                  : 'Aucune tâche complétée'}
            </p>
          ) : (
            filteredTodos.map(todo => (
              <div key={todo._id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                {editingId === todo._id ? (
                  <>
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      className="edit-input"
                    />
                    <div className="actions">
                      <button onClick={() => saveEdit(todo._id)} className="save-button">Sauvegarder</button>
                      <button onClick={cancelEdit} className="cancel-button">Annuler</button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="todo-content">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo._id, todo.completed)}
                        className="checkbox"
                      />
                      <span className="todo-text">{todo.text}</span>
                    </div>
                    <div className="actions">
                      <button onClick={() => startEdit(todo)} className="edit-button">Modifier</button>
                      <button onClick={() => deleteTodo(todo._id)} className="delete-button">Supprimer</button>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;