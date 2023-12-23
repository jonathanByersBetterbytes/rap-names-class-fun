const express = require('express')
const app = express()
//const cors = require('cors')
const PORT = 8000

//app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

let phonebook = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


app.get('/api/persons', (request, response) => {
    if(phonebook){
        console.log(phonebook)
        response.json(phonebook)
    }
})

// let rappers = {
//     '21 savage': {
//         'age': 28,
//         'birthName': 'Shéyaa Bin Abraham-Joseph',
//         'birthdate': '22 October 1992', 
//         'birthLocation': 'London, England',
//         'origin': 'Atlanta, Georgia',
//         'genre': 'hip hop, trap, rap, horrorcore',
//         'occupation': 'rapper, songwriter, record producer',
//         'yearsActive': '2013-present',
//         'labels': 'Epic, Slaughter Gang',
//         'children': 3
//     },
//     'chance the rapper':{
//         'age': 28,
//         'birthName': 'Chancelor Jonathan Bennett',
//         'birthdate': 'April 16, 1993', 
//         'birthLocation': 'London, England',
//         'origin': 'Chicago, Illinois',
//         'genre': 'hip hop, alternative hip hop, r & b',
//         'occupation': 'rapper, singer, song writer, record producer, activist, actor, philanthropist',
//         'yearsActive': '2011-present',
//         'labels': 'none',
//         'children': 0
//     },
//     'unknown':{
//         'age': 'unknown',
//         'birthName': 'unknown',
//         'birthdate': 'unknown', 
//         'birthLocation': 'unknown',
//         'origin': 'unknown',
//         'genre': 'unknown',
//         'occupation': 'unknown',
//         'yearsActive': 'unknown',
//         'labels': 'unknown',
//         'children': 'unknown'
//     }
// }
// const notes = {
//     1:{
//         'id': 1,
//         'note': 'my note',
//         'group': 4,
//         'food': '🍵'
//      },
//     2:{
//         'id': 2,
//         'note': 'my 2 note',
//         'group': 1,
//         'food': '🍿'
//      },
//     3:{
//        'id': 3,
//        'note': 'my 3 note',
//        'group': 4,
//        'food': '🍔'
//     },
//     4:{
//         'id': 4,
//         'note': 'my 4 note',
//         'group': 1,
//         'food': '🍨'
//     },
//     four:{
//         'id': 5,
//         'note': 'my 5 note',
//         'group': 1,
//         'food': '🍨'
//     },
//     getGroup(key){
//         return this[key].group
//     }
// }
// let notesArr = [
//     {
//         'id': 1,
//         'note': 'my note',
//         'group': 4,
//         'food': '🍵'
//     },
//     {
//         'id': 2,
//         'note': 'my 2 note',
//         'group': 1,
//         'food': '🍿'
//     },
//     {
//        'id': 3,
//        'note': 'my 3 note',
//        'group': 4,
//        'food': '🍔'
//     },
//     {
//         'id': 4,
//         'note': 'my 4 note',
//         'group': 1,
//         'food': '🍨'
//     }
// ]

// const generateId = () => {
//     const maxId = notesArr.length > 0 ? Math.max(...notesArr.map(n => n.id)) : 0
//     return maxId + 1
// }
// app.post('/api/notes', (request, response) => {
//     const body = request.body

//     if(!body.content){
//         return response.status(400).json({
//             error: 'content missing'
//         })
//     }

//     const note = {
//         content: body.content,
//         important: Boolean(body.important) || false,
//         id: generateId()
//     }
    
//     notesArr = notesArr.concat(note)

//     console.log(note)
//     response.json(note)
// })

// app.get('/api/notes', (request, response) => {
//     if(notes){
//         console.log(notes)
//         response.json(notes)
//     }
// })
// app.get('/api/notes/:id', (request, response) => {
//     const id = Number(request.params.id)
//     const note = notesArr.find(n=> n.id === id)
//     const groupingArr = notesArr
//         .filter(n => n.group === 4)
//         .map(n => n.food)
//     const grouping = []
//     //console.log(grouping.length)
//     for(const n in notes){
//         console.log(notes[n].group)
        
//         if(notes[n] && notes[n].group === id) grouping.push(notes[n])
//     }
//     // if(groupingArr){
//     //     console.log(`notes with grouping filter on notesArr:`)
//     //     console.log(groupingArr)
//     //     response.json(groupingArr)
//     // }
//     if(grouping.length != 0){
//         console.log(`\n notes with grouping filter on notes:`)
//         console.log(grouping)
//         response.json(grouping)
//     }else response.status(`No notes in group: ${id}`)
//     // if(note){
//     //     console.log(`note with find on notesArr:`)
//     //     console.log(note)
//     //     //response.json(note)
//     // }
//     // if(notes[id]){
//     //     console.log(`\nnote with key on notes:`)
//     //     console.log(notes[id])
//     //     response.json(notes[id])
//     // }
// })
// app.delete('/api/notes/:id', (request, response) => {
//     const id = request.params.id
//     if(notes[id]){
//         delete notes[id]
//         response.json(notes)
//         console.log(notes)
//         response.status(204).end()
//     }
// })
// app.get('/api/rappers', (request, response) => {
//     response.json(rappers)
//     // const rapperName = request.params.name.toLowerCase()
//     // if(rappers[rapperName]){
//     //     response.json(rappers[rapperName])
//     // }else{
//     //     response.json(rappers['unknown'])
//     // }
// })
// app.get('/api/rappers/:name', (request, response) => {
//     const rapperName = request.params.name.toLowerCase()
//     if(rappers[rapperName]){
//         response.json(rappers[rapperName])
//     }else{
//         response.json(rappers['unknown'])
//     }
// })
// app.delete('/api/rappers/:name', (request, response) => {
//     const rapperName = request.params.name.toLowerCase()
//     if(rappers[rapperName]){
//         delete rappers[rapperName]
//         console.log(rappers)
//         //rappers = rappers.filter(rapper => !rapper[rapperName])
//         response.json(rappers)
//         response.status(204).end()
//     }
// })
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})