export class Question {
    id: number = null;
    private title: string ='';
    private theme;
    private difficulty;
    private response: boolean; 
    private goodAnswer: string;

	constructor(id: number, title: string, theme, difficulty, response: boolean, goodAnswer: string){
        this.id = id;
        this.setTitle(title);
        this.setTheme(theme);
        this.setDifficulty(difficulty);
        this.setResponse(response);
        this.setGoodAnswer(goodAnswer);
    }
    
    getTitle() {
        return this.title;
    }

    getTheme() {
        return this.theme;
    }

    getDifficulty() {
        return this.difficulty;
    }

    getResponse() {
        return this.response;
    }

    getGoodAnswer() {
        return this.goodAnswer;
    }

    setTitle(title: string) {
       return this.title = title;
    }

    setTheme(theme) {
        return this.theme = theme;
    }

    setDifficulty(difficulty) {
        return this.difficulty = difficulty;
    }

    setResponse(response: boolean) {
        return this.response = response;
    }

    setGoodAnswer(goodAnswer: string) {
        return this.goodAnswer = goodAnswer;
    }
}
