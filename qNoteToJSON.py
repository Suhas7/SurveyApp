import json
questions = {"Uncategorized" : []}
tokens = []
z=""
while(z!="fileEnd"):
    tokens.append(z)
    z=input()

tokens=tokens[1:]
currHeader = "Uncategorized"
currPrefix = ""
for i in range(len(tokens)):
    if tokens[i].find(":")==-1 and tokens[i].find("?")==-1:
        currHeader=tokens[i]
        questions[currHeader]=[]
        currPrefix=""
    elif tokens[i].find(":")!=-1:
        currPrefix=tokens[i]
    elif tokens[i].find("?")!=-1:
        if currPrefix!="":
            questions[currHeader].append(currPrefix[:-1]+" "+tokens[i].lower())
        else:
            questions[currHeader].append(tokens[i])

keys = questions.keys()
questions = {k:v for k,v in questions.items() if len(v) !=0}

for k,v in questions.items():
    print(k+":")
    for el in v:
        print("    "+el)

with open('questions.json','w') as fp: json.dump(questions,fp)