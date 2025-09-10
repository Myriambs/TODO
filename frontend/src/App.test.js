import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Test très simple pour vérifier que la configuration fonctionne
test('renders learn react link', () => {
  render(<App />);
  
  // Vérifie que le titre principal est présent
  const titleElement = screen.getByText(/ma todo list/i);
  expect(titleElement).toBeInTheDocument();
});

// Test basique pour vérifier le formulaire
test('has add todo form', () => {
  render(<App />);
  
  // Vérifie que le champ input est présent
  const inputElement = screen.getByPlaceholderText(/ajouter une nouvelle tâche/i);
  expect(inputElement).toBeInTheDocument();
  
  // Vérifie que le bouton est présent
  const buttonElement = screen.getByText(/ajouter/i);
  expect(buttonElement).toBeInTheDocument();
});

  // // Test 2: Ajout d'une nouvelle todo
  // test('devrait ajouter une nouvelle todo', async () => {
  //   const newTodo = { _id: '3', text: 'Nouvelle tâche', completed: false };
  //   axios.post.mockResolvedValue({ data: newTodo });
    
  //   render(<App />);
    
  //   // Attendre le chargement initial
  //   await screen.findByText('Test todo 1');
    
  //   // Remplir le formulaire
  //   const input = screen.getByPlaceholderText('Ajouter une nouvelle tâche...');
  //   const addButton = screen.getByText('Ajouter');
    
  //   await userEvent.type(input, 'Nouvelle tâche');
  //   await userEvent.click(addButton);
    
  //   // Vérifier l'appel API
  //   expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/api/todos', {
  //     text: 'Nouvelle tâche',
  //     completed: false
  //   });
    
  //   // Vérifier que la nouvelle todo est affichée
  //   await waitFor(() => {
  //     expect(screen.getByText('Nouvelle tâche')).toBeInTheDocument();
  //   });
  // });

  // // Test 3: Basculer l'état completed d'une todo
  // test('devrait basculer l\'état completed d\'une todo', async () => {
  //   const updatedTodo = { _id: '1', text: 'Test todo 1', completed: true };
  //   axios.put.mockResolvedValue({ data: updatedTodo });
    
  //   render(<App />);
    
  //   // Attendre le chargement initial
  //   await screen.findByText('Test todo 1');
    
  //   // Cliquer sur la checkbox
  //   const checkboxes = screen.getAllByRole('checkbox');
  //   await userEvent.click(checkboxes[0]);
    
  //   // Vérifier l'appel API
  //   expect(axios.put).toHaveBeenCalledWith('http://localhost:5000/api/todos/1', {
  //     completed: true
  //   });
    
  //   // Vérifier que la todo a la classe completed
  //   await waitFor(() => {
  //     const todoItem = screen.getByText('Test todo 1').closest('.todo-item');
  //     expect(todoItem).toHaveClass('completed');
  //   });
  // });

  // // Test 4: Supprimer une todo
  // test('devrait supprimer une todo', async () => {
  //   axios.delete.mockResolvedValue({ data: { message: 'Todo deleted' } });
    
  //   render(<App />);
    
  //   // Attendre le chargement initial
  //   await screen.findByText('Test todo 1');
    
  //   // Cliquer sur le bouton supprimer
  //   const deleteButtons = screen.getAllByText('Supprimer');
  //   await userEvent.click(deleteButtons[0]);
    
  //   // Vérifier l'appel API
  //   expect(axios.delete).toHaveBeenCalledWith('http://localhost:5000/api/todos/1');
    
  //   // Vérifier que la todo est supprimée de l'affichage
  //   await waitFor(() => {
  //     expect(screen.queryByText('Test todo 1')).not.toBeInTheDocument();
  //   });
  // });

  // // Test 5: Filtrer les todos actives
  // test('devrait filtrer pour afficher seulement les todos actives', async () => {
  //   render(<App />);
    
  //   // Attendre le chargement initial
  //   await screen.findByText('Test todo 1');
    
  //   // Cliquer sur le filtre "Actives"
  //   const activeButton = screen.getByText('Actives');
  //   await userEvent.click(activeButton);
    
  //   // Vérifier que seulement les todos actives sont affichées
  //   expect(screen.getByText('Test todo 1')).toBeInTheDocument();
  //   expect(screen.queryByText('Test todo 2')).not.toBeInTheDocument();
  // });

  // // Test 6: Filtrer les todos complétées
  // test('devrait filtrer pour afficher seulement les todos complétées', async () => {
  //   render(<App />);
    
  //   // Attendre le chargement initial
  //   await screen.findByText('Test todo 1');
    
  //   // Cliquer sur le filtre "Complétées"
  //   const completedButton = screen.getByText('Complétées');
  //   await userEvent.click(completedButton);
    
  //   // Vérifier que seulement les todos complétées sont affichées
  //   expect(screen.getByText('Test todo 2')).toBeInTheDocument();
  //   expect(screen.queryByText('Test todo 1')).not.toBeInTheDocument();
  // });

  // // Test 7: Mode édition d'une todo
  // test('devrait passer en mode édition pour une todo', async () => {
  //   render(<App />);
    
  //   // Attendre le chargement initial
  //   await screen.findByText('Test todo 1');
    
  //   // Cliquer sur le bouton modifier
  //   const editButtons = screen.getAllByText('Modifier');
  //   await userEvent.click(editButtons[0]);
    
  //   // Vérifier que le champ d'édition est affiché
  //   expect(screen.getByDisplayValue('Test todo 1')).toBeInTheDocument();
  //   expect(screen.getByText('Sauvegarder')).toBeInTheDocument();
  //   expect(screen.getByText('Annuler')).toBeInTheDocument();
  // });

  // // Test 8: Sauvegarder l'édition d'une todo
  // test('devrait sauvegarder les modifications d\'une todo', async () => {
  //   const updatedTodo = { _id: '1', text: 'Todo modifiée', completed: false };
  //   axios.put.mockResolvedValue({ data: updatedTodo });
    
  //   render(<App />);
    
  //   // Attendre le chargement initial
  //   await screen.findByText('Test todo 1');
    
  //   // Passer en mode édition
  //   const editButtons = screen.getAllByText('Modifier');
  //   await userEvent.click(editButtons[0]);
    
  //   // Modifier le texte
  //   const editInput = screen.getByDisplayValue('Test todo 1');
  //   await userEvent.clear(editInput);
  //   await userEvent.type(editInput, 'Todo modifiée');
    
  //   // Sauvegarder
  //   const saveButton = screen.getByText('Sauvegarder');
  //   await userEvent.click(saveButton);
    
  //   // Vérifier l'appel API
  //   expect(axios.put).toHaveBeenCalledWith('http://localhost:5000/api/todos/1', {
  //     text: 'Todo modifiée'
  //   });
    
  //   // Vérifier que la modification est affichée
  //   await waitFor(() => {
  //     expect(screen.getByText('Todo modifiée')).toBeInTheDocument();
  //   });
  // });

  // // Test 9: Annuler l'édition d'une todo
  // test('devrait annuler l\'édition d\'une todo', async () => {
  //   render(<App />);
    
  //   // Attendre le chargement initial
  //   await screen.findByText('Test todo 1');
    
  //   // Passer en mode édition
  //   const editButtons = screen.getAllByText('Modifier');
  //   await userEvent.click(editButtons[0]);
    
  //   // Modifier le texte
  //   const editInput = screen.getByDisplayValue('Test todo 1');
  //   await userEvent.clear(editInput);
  //   await userEvent.type(editInput, 'Texte modifié');
    
  //   // Annuler
  //   const cancelButton = screen.getByText('Annuler');
  //   await userEvent.click(cancelButton);
    
  //   // Vérifier que le texte original est toujours affiché
  //   expect(screen.getByText('Test todo 1')).toBeInTheDocument();
  //   expect(screen.queryByDisplayValue('Texte modifié')).not.toBeInTheDocument();
  // });

  // // Test 10: Gestion des erreurs API
  // test('devrait afficher un message d\'erreur en cas d\'échec API', async () => {
  //   axios.get.mockRejectedValue(new Error('Network Error'));
    
  //   render(<App />);
    
  //   // Vérifier que le message d'erreur est affiché
  //   await waitFor(() => {
  //     expect(screen.getByText('Impossible de charger les tâches. Vérifiez la connexion au serveur.')).toBeInTheDocument();
  //   });
  // });

  // // Test 11: Ajout d'une todo vide
  // test('ne devrait pas ajouter une todo avec un texte vide', async () => {
  //   render(<App />);
    
  //   // Attendre le chargement initial
  //   await screen.findByText('Test todo 1');
    
  //   // Essayer d'ajouter une todo vide
  //   const addButton = screen.getByText('Ajouter');
  //   await userEvent.click(addButton);
    
  //   // Vérifier que l'API n'a pas été appelée
  //   expect(axios.post).not.toHaveBeenCalled();
  // });

  // // Test 12: Affichage du compteur de tâches
  // test('devrait mettre à jour le compteur de tâches actives', async () => {
  //   render(<App />);
    
  //   // Attendre le chargement initial
  //   await screen.findByText('Test todo 1');
    
  //   // Vérifier le compteur initial
  //   expect(screen.getByText('1 tâche active')).toBeInTheDocument();
    
  //   // Marquer une todo comme complétée
  //   const updatedTodo = { _id: '1', text: 'Test todo 1', completed: true };
  //   axios.put.mockResolvedValue({ data: updatedTodo });
    
  //   const checkboxes = screen.getAllByRole('checkbox');
  //   await userEvent.click(checkboxes[0]);
    
  //   // Vérifier que le compteur est mis à jour
  //   await waitFor(() => {
  //     expect(screen.getByText('0 tâches actives')).toBeInTheDocument();
  //   });
  // });
// });