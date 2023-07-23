import css from './Home.module.css'

const Home = () => {
  return (
    <div className={css.home}>
      <h1>Welcome to <span className={css.phonebook}>PHONEBOOK</span> application!</h1>
      <span>Please, <b>LOG IN</b></span>
      <span>or <b>REGISTER </b>yourself and  join us!</span>
    </div>
  )
}

export default Home