import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
} from 'react-native';

const CHOICES = [
  {
    name: 'Rock',
    uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
  },
  {
    name: 'Paper',
    uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
  },
  {
    name: 'Scissors',
    uri:
      'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
  }
];
const Button = (props) => (
  <TouchableOpacity
    style={styles.buttonStyle}
    onPress={() => props.onPress(props.name)}
  >
    <Text style={styles.buttonText}>
      {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
    </Text>
  </TouchableOpacity>
);
const ChoiceCard = ({ player, choice: { uri, name } }) => {
  const title = name && name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <View style={styles.choiceContainer}>
      <Text style={styles.choiceDescription}>{player}</Text>
      <Image source={{uri}} resizeMode="contain" style={styles.choiceImage} />
      <Text style={styles.choiceCardTitle}>{title}</Text>
    </View>
  );
};
const getRoundOutcome = userChoice => {
  const computerChoice = randomComputerChoice().name;
  
  let result;

  if (userChoice === 'Rock') {
    result = computerChoice === 'Scissors' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === 'Paper') {
    result = computerChoice === 'Rock' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === 'Scissors') {
    result = computerChoice === 'Paper' ? 'Victory!' : 'Defeat!';
  }

  if (userChoice === computerChoice) result = 'Tie game!';
  return [result, computerChoice];
};
const randomComputerChoice = () =>
CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getResultColor = (gamePrompt) => {
  if (gamePrompt === 'Victory!') return 'green';
  if (gamePrompt === 'Defeat!') return 'red';
  return null;
};

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gamePrompt: 'Fire!',
      userChoice: {},
      computerChoice: {}
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={{color: getResultColor(this.state.gamePrompt),fontSize:35}}>{this.state.gamePrompt}</Text>
        <View style={styles.content}>
          <ChoiceCard player="Player" choice={this.state.userChoice}/>
          <Text style={{marginTop:100}}>vs</Text>
          <ChoiceCard player="Computer" choice={this.state.computerChoice}/>
        </View>
        <View style={styles.buttonContainer}>
          {
            CHOICES.map(choice => {
              let name = choice.name;
              return(
                <View style={styles.buttonStyle}>
                 <Button key={choice.name} name={choice.name} onPress={(playerChoice)=>{
                   const [result, compChoice] = getRoundOutcome(playerChoice);
                   const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
                   const newComputerChoice = CHOICES.find(choice => choice.name === compChoice);
                   const re = CHOICES.find(choice => choice.name === compChoice);
                   this.setState({
                     userChoice: newUserChoice,
                     computerChoice: newComputerChoice,
                     gamePrompt:result,
                   })
                 }} />
                </View>
                );
            })
          }
        </View> 
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },
  content:{
    flex:2,
    flexDirection:'row',
    justifyContent:'center',
    borderWidth: 2,
    borderColor: 'grey',
    margin: 5,
  },
  buttonContainer: {
    flex:3,
  },
  buttonStyle: {
    width: 200,
    margin: 10,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#640D14',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },
  choiceContainer: {
    flex: 1,
    alignItems: 'center',
  },
  choiceDescription: {
    fontSize: 25,
    color: '#250902',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  choiceCardTitle: {
    fontSize: 30,
    color: '#250902'
  },
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  }
});
