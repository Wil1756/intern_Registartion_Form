from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


interns =[
    { 
     "id": 1, 
     "name": "Mukose Sadam", 
     "nationality":"Ugandan", 
     "email": "mukosesadam2@gmail.com", 
     "course":"Information and communications technology", 
     "school":"Uganda institute of information and communications technology", 
     "designation":"Sotfware Development",
     "contact": "+256754924428", 
     "duration":"3 Months"
    },
    { 
     "id": 2, 
     'name': 'Willard Owiti Odongo', 
     'nationality':'Kenyan', 
     'email': 'willard.odongo10@gmail.com', 
     'course':'Computer Science', 
     'school':'The University of Nairobi', 
     'designation':'Software Development',
     'contact': '+254742294851', 
     'duration':'3 Months'
    },
    { 
     "id": 3, 
     'name': 'Nam Ronny', 
     'nationality':'', 
     'email': 'namronny12@gmail.com', 
     'course':'Bachelor of Information and Technology', 
     'school':'Mbarara University of science and technology', 
     'designation':'Software Development',
     'contact': '+256784090922', 
     'duration':'2 Months'
    },
    { 
     "id": 4, 										
     'name': 'WANTANTE SEMEON FORTUNE', 
     'nationality':'Ugandan', 
     'email': 'semeonfortune67@gmail.com', 
     'course':'Computer science', 
     'school':'Makerere University', 
     'designation':'Software Development',
     'contact': '+256782409375', 
     'duration':'2 Months'
    },
    { 
     "id": 5,
     'name': 'HISAALU JUNIOR NELSON', 
     'nationality':'Ugandan', 
     'email': 'hisaalujuniornelson@gmail.com', 
     'course':'Computer science', 
     'school':'Makerere University', 
     'designation':'Software Development',
     'contact': '+256786764239', 
     'duration':'2 Months'
    },
    { 
     "id": 6,
     'name': 'Allan Amanya Kayumbu', 
     'nationality':'Ugandan', 
     'email': 'allanalmax13@gmail.com', 
     'course':'Computer science', 
     'school':'Makerere University', 
     'designation':'Software Development',
     'contact': '+256759209214', 
     'duration':'2 Months'
    },
    { 
     "id": 7,												
     'name': 'KEINERUGABA JOHN JOEL ', 
     'nationality':'Ugandan', 
     'email': 'keinerugabajohnjoel@gmail.com', 
     'course':'Computer science', 
     'school':'Makerere University', 
     'designation':'Software Development',
     'contact': '+256708733487', 
     'duration':'3 Months'
    },
    { 
     "id": 8,												
     'name': 'Kiwalabye Benjamin', 
     'nationality':'Ugandan', 
     'email': 'kiwalabyebenjamin533@gmail.com', 
     'course':'Computer science', 
     'school':'Makerere University', 
     'designation':'Software Development',
     'contact': '+256757947810', 
     'duration':'3 Months'
    },
    { 
     "id": 9,											
     'name': 'Binomugisha Bariyo Brian', 
     'nationality':'Ugandan', 
     'email': 'brianbariyo9@gmail.com', 
     'course':'Computer science', 
     'school':'Makerere University', 
     'designation':'Software Development',
     'contact': '+256700853335', 
     'duration':'2 Months'
    },
    { 
     "id": 10,												
     'name': 'Magala Reuben', 
     'nationality':'Ugandan', 
     'email': 'magalareuben60@gmail.com', 
     'course':'Computer science', 
     'school':'Kyambogo University', 
     'designation':'Software Development',
     'contact': '+256705099093', 
     'duration':'2 Months'
    }
]

@app.route('/interns', methods=['GET'])
def get_interns():
    return jsonify(interns)


@app.route('/interns', methods=['POST'])
def add_interns():
    new_intern = request.get_json()
    interns.append(new_intern)
    return jsonify(new_intern), 201

@app.route('/interns/<int:intern_id>', methods=['DELETE'])
def delete_intern(intern_id):
    intern_to_delete = next((intern for intern in interns if intern['id'] == intern_id), None)
    if intern_to_delete:
        interns.remove(intern_to_delete)
        return jsonify({'message': 'Deleted successfully'})
    else:
        return jsonify({'message': 'Not found'}), 404


if __name__ == "__main__":
    app.run()



