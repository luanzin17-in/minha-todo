# 📝 Minha Todo App — React

Aplicação de lista de tarefas desenvolvida com **React + Vite**.

## 🚀 Como Executar

npm install
npm run dev

Acesse: http://localhost:5173

## ✅ Funcionalidades

- Adicionar tarefas (botão ou tecla Enter)
- Marcar tarefa como concluída clicando no texto
- Remover tarefa com o botão ✕
- Contador de progresso

## 🧠 Conceitos Utilizados

### JSX
Sintaxe que mistura JavaScript com HTML. Diferenças: usa `className`, `onClick`,
e expressões JS dentro de `{}`.

### Componentes
- `App` — gerencia estado e lógica
- `ItemTarefa` — componente filho que recebe dados via props

### useState
Hook para criar estado reativo. Quando muda, o React re-renderiza automaticamente.

const [tarefas, setTarefas] = useState([]);
const [input, setInput] = useState('');

### Manipulação de Arrays
- Adicionar: [...tarefas, novoItem]
- Remover: tarefas.filter((_, i) => i !== index)
- Atualizar: tarefas.map((t, i) => i === index ? novo : t)

## 📁 Estrutura

src/
├── App.jsx   → Componente principal + lógica
├── App.css   → Estilos
└── main.jsx  → Ponto de entrada (não modificar)