import sunLogo from './assets/sun.png'
import './App.css'

function App() {

  const calculatePercentage = () => {
    const currentDate = new Date()

    const firstDayOfSummer = new Date('June 1, 2023 00:00:00')
    const lastDayOfSummer = new Date('August 31, 2023 23:59:59')

    const diffFirst = currentDate.getTime() - firstDayOfSummer.getTime()
    const diffLast = lastDayOfSummer.getTime() - firstDayOfSummer.getTime()

    const gone = diffFirst / diffLast * 100
    return gone.toFixed(2)
  }

  return (
    <>
      <div className='sunContainer'>
        <img src={sunLogo} className="logo sun" alt="Sun logo" />
      </div>
      <h1>{calculatePercentage()}%</h1>
      <h2>of summer is gone.</h2>
      <a className="improve" href="https://www.youtube.com/watch?v=YucXxma_-ko">🔗 How To Stop Wasting Your Life</a>
    </>
  )
}

export default App
