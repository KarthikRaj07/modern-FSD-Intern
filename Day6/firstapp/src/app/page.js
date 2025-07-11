import './globals.css';
import './styles/style.css';
import './styles/actorlist.css';

const actors = [
  {
    id: 'rajnikanth',
    name: 'Rajinikanth',
    image: '/rajini.jpeg',
  },
  {
    id: 'kamal-haasan',
    name: 'Kamal Haasan',
    image: '/kamal.jpeg',
  },
  {
    id: 'vijay',
    name: 'Vijay',
    image: '/vijay.jpeg',
  },
  {
    id: 'ajith',
    name: 'Ajith Kumar',
    image: '/ajith.jpeg',
  },
];

export default function Home() {
  return (
    <main className='main-container'>
      <h1
        style={{
          color: '#fff',
          textAlign: 'center',
          letterSpacing: '2px',
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          textShadow: '2px 2px 8px #232526',
        }}
      >
        South Indian Actors
      </h1>
      <div className='actor-list'>
        {actors.map((actor) => (
          <div className='actor-card' key={actor.id}>
            <img src={actor.image} alt={actor.name} />
            <h2>{actor.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}