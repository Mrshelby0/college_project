from flask import Flask, render_template, request, redirect, url_for
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, TextAreaField
from flask_uploads import UploadSet, configure_uploads, DOCUMENTS, IMAGES
from wtforms.validators import DataRequired

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['UPLOADED_FILES_DEST'] = 'uploads/'

files = UploadSet('files', DOCUMENTS + IMAGES)
configure_uploads(app, files)

class ProjectForm(FlaskForm):
    projectTitle = StringField('Project Title', validators=[DataRequired()])
    projectCategory = SelectField('Category', choices=[('science', 'Science'), ('technology', 'Technology'), ('engineering', 'Engineering'), ('mathematics', 'Mathematics')], validators=[DataRequired()])
    projectDescription = TextAreaField('Description', validators=[DataRequired()])

@app.route('/submit-project', methods=['GET', 'POST'])
def submit_project():
    form = ProjectForm()
    if form.validate_on_submit():
        projectTitle = form.projectTitle.data
        projectCategory = form.projectCategory.data
        projectDescription = form.projectDescription.data
        projectFile = request.files['projectFile']
        if projectFile:
            filename = files.save(projectFile)
            print(f'File saved as: {filename}')
        print(f'Project Title: {projectTitle}')
        print(f'Category: {projectCategory}')
        print(f'Description: {projectDescription}')
        return 'Project submitted successfully!'
    return render_template('submit.html', form=form)

if __name__ == '__main__':
    app.run(debug=True)
