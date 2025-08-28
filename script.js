class StressTrainer {
    constructor() {
        this.words = [
            // Основные слова из ЕГЭ
            {word: "алфавит", correct: "алфавИт", category: "существительные"},
            {word: "баловать", correct: "баловАть", category: "глаголы"},
            {word: "брала", correct: "брАла", category: "глаголы", rule: "Исключение: крАлась, клАла, послАла"},
            {word: "верба", correct: "вЕрба", category: "существительные"},
            {word: "гражданство", correct: "граждАнство", category: "существительные"},
            {word: "дефис", correct: "дефИс", category: "существительные"},
            {word: "диспансер", correct: "диспансЕр", category: "существительные"},
            {word: "договор", correct: "договОр", category: "существительные"},
            {word: "документ", correct: "докУмент", category: "существительные"},
            {word: "досуг", correct: "досУг", category: "существительные"},
            
            // Глаголы и причастия
            {word: "вручит", correct: "вручИт", category: "глаголы", rule: "Остальные глаголы"},
            {word: "дозировать", correct: "дозИровать", category: "глаголы", rule: "Остальные глаголы"},
            {word: "закупорить", correct: "закУпорить", category: "глаголы", rule: "Остальные глаголы"},
            {word: "защемит", correct: "защемИт", category: "глаголы", rule: "Остальные глаголы"},
            {word: "звонит", correct: "звонИт", category: "глаголы", rule: "Остальные глаголы + с приставками"},
            {word: "кашлянуть", correct: "кАшлянуть", category: "глаголы", rule: "Остальные глаголы"},
            {word: "облегчить", correct: "облегчИть", category: "глаголы", rule: "Остальные глаголы: облегчИт"},
            {word: "положить", correct: "положИть", category: "глаголы", rule: "Остальные глаголы: положИл"},
            
            // Причастия и деепричастия
            {word: "кормящий", correct: "кормЯщий", category: "причастия", rule: "На гласную перед НН/ВШ/Щ"},
            {word: "согнутый", correct: "сОгнутый", category: "причастия", rule: "С суффиксом Т - на первый слог"},
            {word: "закупорив", correct: "закУпорив", category: "деепричастия", rule: "Как в инфинитиве"},
            {word: "начав", correct: "начАв", category: "деепричастия", rule: "Как в инфинитиве"},
            
            // Дополнительные слова из вашего списка
            {word: "аэропорты", correct: "аэропОрты", category: "существительные"},
            {word: "банты", correct: "бАнты", category: "существительные"},
            {word: "бороду", correct: "бОроду", category: "существительные"},
            {word: "бухгалтеров", correct: "бухгАлтеров", category: "существительные"},
            {word: "вероисповедание", correct: "вероисповЕдание", category: "существительные"},
            {word: "водопровод", correct: "водопровОд", category: "существительные"},
            {word: "газопровод", correct: "газопровОд", category: "существительные"},
            {word: "договорённость", correct: "договорЁнность", category: "существительные"},
            {word: "еретик", correct: "еретИк", category: "существительные"},
            {word: "жалюзи", correct: "жалюзИ", category: "существительные"},
            {word: "каталог", correct: "каталОг", category: "существительные"},
            {word: "квартал", correct: "квартАл", category: "существительные"},
            {word: "километр", correct: "киломЕтр", category: "существительные"},
            {word: "краны", correct: "крАны", category: "существительные"},
            {word: "кремень", correct: "кремЕнь", category: "существительные"},
            {word: "мозаичный", correct: "мозаИчный", category: "прилагательные"},
            {word: "недуг", correct: "недУг", category: "существительные"},
            {word: "некролог", correct: "некролОг", category: "существительные"},
            {word: "оптовый", correct: "оптОвый", category: "прилагательные"},
            {word: "партер", correct: "партЕр", category: "существительные"},
            {word: "портфель", correct: "портфЕль", category: "существительные"},
            {word: "свёкла", correct: "свЁкла", category: "существительные"},
            {word: "сироты", correct: "сирОты", category: "существительные"},
            {word: "средства", correct: "срЕдства", category: "существительные"},
            {word: "статуя", correct: "стАтуя", category: "существительные"},
            {word: "столяр", correct: "столЯр", category: "существительные"},
            {word: "торты", correct: "тОрты", category: "существительные"},
            {word: "туфля", correct: "тУфля", category: "существительные"},
            {word: "цемент", correct: "цемЕнт", category: "существительные"},
            {word: "щавель", correct: "щавЕль", category: "существительные"},
            {word: "эксперт", correct: "экспЕрт", category: "существительные"},
            
            // Глаголы женского рода
            {word: "брала", correct: "бралА", category: "глаголы", rule: "Женский род - на последнюю А"},
            {word: "занята", correct: "занятА", category: "причастия", rule: "Краткие причастия женского рода - на последнюю А"},
            {word: "послала", correct: "послАла", category: "глаголы", rule: "Исключение: крАлась, клАла, послАла"},
            
            // Дополнительные глаголы
            {word: "жилось", correct: "жилОсь", category: "глаголы", rule: "Остальные глаголы"},
            {word: "занять", correct: "занЯть", category: "глаголы", rule: "занЯть: зАнял, занялА, зАняли"},
            {word: "запломбировать", correct: "запломбировАть", category: "глаголы", rule: "Остальные глаголы"},
            {word: "клеить", correct: "клЕить", category: "глаголы", rule: "Остальные глаголы"},
            {word: "наделит", correct: "наделИт", category: "глаголы", rule: "Остальные глаголы"},
            {word: "одолжит", correct: "одолжИт", category: "глаголы", rule: "Остальные глаголы: одолжИт"},
            {word: "повторит", correct: "повторИт", category: "глаголы", rule: "Остальные глаголы"},
            {word: "принять", correct: "принЯть", category: "глаголы", rule: "принЯть: прИнял, принялА, прИняли"},
            {word: "сверлит", correct: "сверлИт", category: "глаголы", rule: "Остальные глаголы"}
        ;
        
        this.currentWordIndex = 0;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.isTrainingStarted = false;
        this.showRules = true;
        
        this.initializeElements();
        this.setupEventListeners();
    }
    
    initializeElements() {
        this.currentWordElement = document.getElementById('currentWord');
        this.stressOptionsElement = document.getElementById('stressOptions');
        this.startBtn = document.getElementById('startBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.resultElement = document.getElementById('result');
        this.correctElement = document.getElementById('correct');
        this.incorrectElement = document.getElementById('incorrect');
        this.ruleElement = document.getElementById('rule');
        this.categoryElement = document.getElementById('category');
        this.toggleRulesBtn = document.getElementById('toggleRulesBtn');
        this.ruleInfoElement = document.getElementById('ruleInfo');
    }
    
    setupEventListeners() {
        if (this.toggleRulesBtn) {
            this.toggleRulesBtn.addEventListener('click', () => this.toggleRules());
        }
    }
    
    toggleRules() {
        this.showRules = !this.showRules;
        this.toggleRulesBtn.textContent = this.showRules ? 'Скрыть правила' : 'Показать правила';
        this.updateRuleDisplay();
    }
    
    updateRuleDisplay() {
        if (this.ruleInfoElement) {
            this.ruleInfoElement.style.display = this.showRules ? 'block' : 'none';
        }
    }
    
    startTraining() {
        this.isTrainingStarted = true;
        this.shuffleWords();
        this.currentWordIndex = 0;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.updateStats();
        
        this.startBtn.disabled = true;
        this.nextBtn.disabled = false;
        this.resultElement.textContent = '';
        this.resultElement.style.background = 'transparent';
        
        this.showWord();
    }
    
    checkAnswer(selected, correct) {
        const buttons = this.stressOptionsElement.querySelectorAll('.stress-btn');
        
        buttons.forEach(button => {
            button.disabled = true;
            if (button.textContent === correct) {
                button.classList.add('correct');
            } else if (button.textContent === selected) {
                button.classList.add('incorrect');
            }
        });
        
        if (selected === correct) {
            this.correctAnswers++;
            this.resultElement.textContent = '✅ Правильно!';
            this.resultElement.style.background = '#c8e6c9';
            this.resultElement.style.color = '#000';
        } else {
            this.incorrectAnswers++;
            this.resultElement.textContent = `❌ Неправильно! Правильно: ${correct}`;
            this.resultElement.style.background = '#ffebee';
            this.resultElement.style.color = '#000';
        }
        
        this.updateStats();
        this.nextBtn.disabled = false;
    }
    
    nextWord() {
        this.currentWordIndex++;
        this.nextBtn.disabled = true;
        this.resultElement.textContent = '';
        this.showWord();
    }
    
    updateStats() {
        this.correctElement.textContent = this.correctAnswers;
        this.incorrectElement.textContent = this.incorrectAnswers;
    }
    
    finishTraining() {
        this.currentWordElement.textContent = 'Тренировка завершена!';
        this.stressOptionsElement.innerHTML = '';
        this.resultElement.textContent = `Результат: ${this.correctAnswers} из ${this.words.length}`;
        this.startBtn.disabled = false;
        this.nextBtn.disabled = true;
        this.isTrainingStarted = false;
        
        // Очищаем информацию о правиле
        if (this.categoryElement) this.categoryElement.textContent = '';
        if (this.ruleElement) this.ruleElement.textContent = '';
    }
    
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

// Инициализация приложения
const trainer = new StressTrainer();

// Глобальные функции для кнопок
function startTraining() {
    trainer.startTraining();
}

function nextWord() {
    trainer.nextWord();
}

function toggleRules() {
    trainer.toggleRules();
}
