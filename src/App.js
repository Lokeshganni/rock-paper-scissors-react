import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import './App.css'
import Popup from 'reactjs-popup'
import {MdModeEdit} from 'react-icons/md'
import {
  HeadingContainer,
  Heading,
  GameResMainContainer,
  GameResIconCard,
  GameResIcon,
  GameResText,
  GameResOwner,
  PlayAgainBtnContainer,
  PlayAgainBtn,
  YourNamePara,
  BothScoresMainContainer,
  SpanEle,
  FinalResTxt,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    dataTestId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    dataTestId: 'scissorsButton ',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    dataTestId: 'paperButton ',
  },
]

class App extends Component {
  state = {
    isNameEntered: true,
    displayRes: false,
    userObj: {},
    sysObj: {},
    resTxt: '',
    yourScore: 0,
    opponentScore: 0,
    userName: 'You',
  }

  handleUserChoice = userOptedObj => {
    let {yourScore, opponentScore} = this.state
    const randomNum = Math.floor(Math.random() * 3)
    const systemGeneratedObj = choicesList[randomNum]
    const userSelectedId = userOptedObj.id
    const sysGeneratedId = systemGeneratedObj.id
    let res
    if (userSelectedId === sysGeneratedId) {
      res = 'IT IS DRAW'
    } else if (
      (userSelectedId === 'ROCK' && sysGeneratedId === 'SCISSORS') ||
      (userSelectedId === 'SCISSORS' && sysGeneratedId === 'PAPER') ||
      (userSelectedId === 'PAPER' && sysGeneratedId === 'ROCK')
    ) {
      res = 'YOU WON'
      yourScore += 1
    } else {
      res = 'YOU LOSE'
      opponentScore += 1
    }
    this.setState({
      userObj: userOptedObj,
      sysObj: systemGeneratedObj,
      displayRes: true,
      resTxt: res,
      yourScore,
      opponentScore,
    })
  }

  handlePlayAgain = () => {
    this.setState({displayRes: false})
  }

  renderGameRes = () => {
    const {userObj, sysObj, resTxt, userName} = this.state
    return (
      <GameResMainContainer>
        <div className="game-res-icons-container">
          <GameResIconCard>
            <GameResOwner>{userName}</GameResOwner>
            <GameResIcon src={userObj.imageUrl} alt="your choice" />
          </GameResIconCard>
          <GameResIconCard>
            <GameResOwner>OPPONENT</GameResOwner>
            <GameResIcon src={sysObj.imageUrl} alt="opponent choice" />
          </GameResIconCard>
        </div>
        <div>
          <GameResText>{resTxt}</GameResText>
          <PlayAgainBtnContainer>
            <PlayAgainBtn onClick={this.handlePlayAgain} type="button">
              PLAY AGAIN
            </PlayAgainBtn>
          </PlayAgainBtnContainer>
        </div>
      </GameResMainContainer>
    )
  }

  renderInitialGameIcons = () => (
    <div className="rps-icons-select-main-container">
      <ul className="icons-ul-container">
        {choicesList.map(each => (
          <li key={each.id} className="btn-icon-li-container">
            <button
              onClick={() => this.handleUserChoice(each)}
              className="icon-btn-container"
              data-testid={each.dataTestId}
              type="button"
              aria-label="icon"
            >
              <img src={each.imageUrl} alt={each.id} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )

  handleEditName = () => {
    this.setState({isNameEntered: false})
  }

  handleEnterUserName = event => {
    const name = event.target.value
    this.setState({userName: name.toUpperCase()})
  }

  handleEnterYourNameBtn = () => {
    this.setState({isNameEntered: true})
  }

  resetScores = () => {
    this.setState({yourScore: 0, opponentScore: 0})
  }

  renderFinalScoreText = () => {
    const {yourScore, opponentScore} = this.state

    if (yourScore === opponentScore) {
      return <FinalResTxt>Oops! IT IS A DRAW</FinalResTxt>
    }

    if (yourScore > opponentScore) {
      return <FinalResTxt>Hurray! YOU WON</FinalResTxt>
    }

    return <FinalResTxt>Sorry! YOU LOSE</FinalResTxt>
  }

  render() {
    const {
      displayRes,
      yourScore,
      opponentScore,
      isNameEntered,
      userName,
    } = this.state
    return (
      <div className="app-container">
        <div className="score-main-container">
          <HeadingContainer>
            <Heading>ROCK PAPER SCISSORS</Heading>
          </HeadingContainer>
          <BothScoresMainContainer>
            <div className="score-display-card">
              <p className="score-title-para">Your Score</p>
              <p className="score-count-para">{yourScore}</p>
            </div>
            <div className="score-display-card">
              <p className="score-title-para">Opponent Score</p>
              <p className="score-count-para">{opponentScore}</p>
            </div>
          </BothScoresMainContainer>
        </div>
        <div className="finish-game-btn-and-enter-ur-name-container">
          <div className="popup-main-container">
            <Popup
              modal
              overlayStyle={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
              trigger={
                <div className="finish-game-btn-container">
                  <button onClick={this.handleFinishGame} type="button">
                    FINISH GAME
                  </button>
                </div>
              }
              position="bottom-right"
            >
              {close => (
                <div className="finish-game-popup-card">
                  <button
                    className="close-btn-container"
                    aria-label="popup-close-btn"
                    type="button"
                    onClick={() => {
                      this.resetScores()
                      close()
                    }}
                  >
                    <RiCloseLine />
                  </button>

                  <div className="finish-game-score-container">
                    <p>
                      {userName} Score: <SpanEle>{yourScore}</SpanEle>
                    </p>
                    <p>
                      Opponent Score: <SpanEle>{opponentScore}</SpanEle>
                    </p>
                    {this.renderFinalScoreText()}
                  </div>
                </div>
              )}
            </Popup>
          </div>

          <div className="enter-name-container">
            {isNameEntered ? (
              <>
                <p className="enter-ur-name-para">Your Name : </p>
                <YourNamePara>{userName}</YourNamePara>
                <button
                  className="edit-btn-container"
                  type="button"
                  aria-label="edit-btn"
                  onClick={this.handleEditName}
                >
                  <MdModeEdit className="edit-btn-icon" />
                </button>
              </>
            ) : (
              <>
                <input
                  className="enter-ur-name-input-field"
                  placeholder="Enter Your Name"
                  type="text"
                  onChange={this.handleEnterUserName}
                />
                <button
                  className="enter-ur-name-btn"
                  type="button"
                  aria-label="enter-btn"
                  onClick={this.handleEnterYourNameBtn}
                >
                  Enter
                </button>
              </>
            )}
          </div>
        </div>

        {displayRes ? this.renderGameRes() : this.renderInitialGameIcons()}

        <div className="popup-main-container">
          <Popup
            modal
            overlayStyle={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
            trigger={
              <div className="rules-container">
                <button type="button">RULES</button>
              </div>
            }
            position="bottom-right"
          >
            {close => (
              <div className="popup-card">
                <button
                  className="close-btn-container"
                  aria-label="popup-close-btn"
                  type="button"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>

                <div>
                  <img
                    className="popup-img"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default App
