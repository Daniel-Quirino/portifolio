import './styles.css';

export default function Presentation() {
  return (
    <div className='presentation'>
      <h1 className="presentation__title">
        Desenvolvedor Full Stack
      </h1>
      <label className="subtitle">
        Apaixona por programação, tecnologia e novos desafios
      </label>
      <div className='presentation__avatar'>
        <img src='https://mattfarley.ca/img/mf-avatar.svg' alt='meu avatar' ></img>
      </div>
    </div>
  )
}