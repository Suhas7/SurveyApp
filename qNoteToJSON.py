import json
tokens = []
z=""
while(z!="fileEnd"):
    tokens.append(z)
    z=input()
tokens=tokens[1:]
headI=-1
currHeader = "Uncategorized"
currPrefix = ""
questions = {-1 : {'title':'','items':[]}}
for i in range(len(tokens)):
    if tokens[i].find(":")==-1 and tokens[i].find("?")==-1:
        currHeader=tokens[i]
        headI+=1
        questions[headI]={'title':currHeader,'items':[]}
        currPrefix=""
    elif tokens[i].find(":")!=-1:
        currPrefix=tokens[i]
    elif tokens[i].find("?")!=-1:
        if currPrefix!="":
            questions[headI]['items'].append(currPrefix[:-1]+" "+tokens[i].lower())
        else:
            questions[headI]['items'].append(tokens[i])

keys = questions.keys()
questions = {k:v for k,v in questions.items() if len(v['items']) !=0}

for k,v in questions.items():
    print(v['title']+":")
    for el in v['items']:
        print("    "+el)

with open('questions.json','w') as fp: json.dump(questions,fp)