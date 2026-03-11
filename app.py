from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# 1. Define Sample Questions
# Each question belongs to a category
questions = [
    {"id": 1, "question": "I enjoy solving logical puzzles and math problems.", "category": "Technology"},
    {"id": 2, "question": "I like painting, drawing, or playing musical instruments.", "category": "Arts"},
    {"id": 3, "question": "I enjoy leading teams and planning events.", "category": "Business"},
    {"id": 4, "question": "I am curious about how the human body or nature works.", "category": "Science"},
    {"id": 5, "question": "I like coding or learning how software works.", "category": "Technology"},
    {"id": 6, "question": "I enjoy writing stories or performing on stage.", "category": "Arts"},
    {"id": 7, "question": "I am interested in stock markets or sales.", "category": "Business"},
    {"id": 8, "question": "I like doing experiments in a laboratory.", "category": "Science"},
]

# 2. Define Career Recommendations based on Categories
career_map = {
    "Technology": "Software Developer, Data Scientist, or AI Engineer. You belong in the tech world!",
    "Arts": "Graphic Designer, Psychologist, Journalist, or Performer. Your creativity is your strength!",
    "Business": "Entrepreneur, Marketing Manager, or Financial Analyst. You are a natural leader!",
    "Science": "Doctor, Biologist, or Research Scientist. You are meant to discover new things!"
}

@app.route('/')
def index():
    """Home Page"""
    return render_template('index.html')

@app.route('/quiz')
def quiz():
    """Show the Quiz Questions"""
    return render_template('quiz.html', questions=questions)

@app.route('/submit', methods=['POST'])
def submit():
    """Process the answers"""
    if request.method == 'POST':
        scores = {"Technology": 0, "Arts": 0, "Business": 0, "Science": 0}
        
        # Calculate scores based on radio button values (1 to 5)
        for q in questions:
            q_id = str(q['id'])
            # Get the answer value (default to 0 if missed)
            value = int(request.form.get(q_id, 0))
            
            # Add points to the specific category
            if q['category'] in scores:
                scores[q['category']] += value

        # Find the category with the highest score
        best_fit = max(scores, key=scores.get)
        result_text = career_map[best_fit]
        score_value = scores[best_fit]

        return render_template('result.html', career=best_fit, details=result_text, score=score_value)

if __name__ == '__main__':
    app.run(debug=True)