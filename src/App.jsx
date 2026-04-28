import { useState } from 'react';
import './App.css';

// Componente separado para cada tarefa - boa prática em React!
function ItemTarefa({ tarefa, index, onRemover, onToggle }) {
  return (
    <li className={`item-tarefa ${tarefa.concluida ? 'concluida' : ''}`}>
      <span onClick={() => onToggle(index)} className="texto-tarefa">
        {tarefa.texto}
      </span>
      <button
        className="btn-remover"
        onClick={() => onRemover(index)}
        title="Remover tarefa"
      >
        ✕
      </button>
    </li>
  );
}

function App() {
  const [tarefas, setTarefas] = useState([
    { texto: 'Aprender React', concluida: false },
    { texto: 'Criar meu primeiro componente', concluida: false },
  ]);

  const [input, setInput] = useState('');

  function adicionarTarefa() {
    if (input.trim()) {
      setTarefas([...tarefas, { texto: input, concluida: false }]);
      setInput('');
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') adicionarTarefa();
  }

  function removerTarefa(index) {
    setTarefas(tarefas.filter((_, i) => i !== index));
  }

  function toggleTarefa(index) {
    setTarefas(
      tarefas.map((tarefa, i) =>
        i === index ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  }

  const total = tarefas.length;
  const concluidas = tarefas.filter((t) => t.concluida).length;

  return (
    <div className="container">
      <header className="header">
        <h1>📝 Minhas Tarefas</h1>
        {total > 0 && (
          <p className="progresso">
            {concluidas} de {total} concluídas
          </p>
        )}
      </header>

      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite uma nova tarefa..."
          className="input-tarefa"
        />
        <button onClick={adicionarTarefa} className="btn-adicionar">
          Adicionar
        </button>
      </div>

      {tarefas.length === 0 ? (
        <p className="lista-vazia">Nenhuma tarefa ainda. Adicione uma acima!</p>
      ) : (
        <ul className="lista-tarefas">
          {tarefas.map((tarefa, index) => (
            <ItemTarefa
              key={index}
              tarefa={tarefa}
              index={index}
              onRemover={removerTarefa}
              onToggle={toggleTarefa}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;