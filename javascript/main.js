const tic_tac_toe = {
    board: ['', '', '', '', '', '', '', '', ''],
    simbols: {
       options: ['x', 'o'],
       turn_index: 0,
       change: function(){
           this.turn_index = (this.turn_index === 0 ? 1 : 0);
       }
    },
        container_element: null,
    gameover: false,

    winning_sequences: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ],


    init: function(container){
        this.container_element = container;

    },

make_play: function(position){
    if (this.gameover) return false;
    if(this.board[position] === ''){
        this.board[position] = this.simbols.options [this.simbols.turn_index];
        this.draw();
        let winning_sequences_index = this.check_winning_sequences (this.simbols.options [this.simbols.turn_index]);
        if (winning_sequences_index >= 0 || !this.board.includes('')){

            this.game_is_over();
            this.stylize_winner_sequence(this.winning_sequences[winning_sequences_index]);

        }
        else{
        this.simbols.change();
        }
        return true;
    }else{
        return false;
    }




    

},


stylize_winner_sequence: function(winner_sequence) {
    winner_sequence.forEach((position) => {
      this
        .container_element
        .querySelector(`div:nth-child(${position + 1})`)
        .classList.add('winner');
    });
  },


game_is_over: function(){
    this.gameover = true;
    console.log("GAME OVER");

},


    is_game_over: function () {


        return this.board.includes('');
    },

start: function () {
    this.board.fill('');
    this.draw();
    this.gameover = false;       
    this.gameover = false;
},

restart: function () {
    if (this.is_game_over() || this.gameover) {
        this.start();
        console.log('this game has been restarted!')
    } else if (confirm('Are you sure you want to restart this game?')) {
        this.start();
        console.log('this game has been restarted!')
    }
},


check_winning_sequences: function(simbol){
    for (i in this.winning_sequences){
        if(this.board [this.winning_sequences[i][0] ] == simbol &&
            this.board [this.winning_sequences[i][1] ] == simbol &&
            this.board [this.winning_sequences[i][2] ] == simbol){
                console.log('Sequencia vencedora: ' + i);
                return i;
                
            }
    };

    return -1;



},

restart: function () {
    if (this.is_game_over() || this.gameover) {
        this.start();
        console.log('this game has been restarted!')
    } else if (confirm('Are you sure you want to restart this game?')) {
        this.start();
        console.log('this game has been restarted!')
    }
},


    draw: function(){

        let content = '';

        for (i in this.board){
            content += '<div onclick="tic_tac_toe.make_play(' + i + ')">' + this.board[i] + '</div>';
        }

        this.container_element.innerHTML = content;

    }

};