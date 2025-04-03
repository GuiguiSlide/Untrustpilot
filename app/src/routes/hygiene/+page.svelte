<script>

    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition'

    import data from './questions.json';

	let explainationVisible = $state(false);
    let endReached = $state(false)
    let userSignedIn = $state(false)

    // TYPING & STYLE FUNCTIONS
	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.1);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
    
    console.log("")
    console.log("")
    console.log('-------------------------------------------------')
    console.log(data);

    // STATS HANDLER
    let percentages = $state([50, 50, 50, 50])
    let points = $state([0, 0, 0, 0])
    
    // QUIZZ HANDLER
    let compteurs = $state(["Gestion des mots de passe", "Phishing et emails frauduleux", "Mise à jour et protection des appareils", "Sauvegarde et récupération des données"])

    let correctAnswer = $state(false);

    let sectionNumber = 1
    let questionNumber = 1
    let floorRef = "A"

    let sectionKey = "Section" + sectionNumber
    console.log(sectionKey)

    let sectionName = $state(data[sectionKey]["section-name"])
    console.log(sectionName)

    let questionRef = $state(floorRef + questionNumber)
    console.log(questionRef)

    let questionText = $state(data[sectionKey][questionRef]["question"])
    let answers = $state(data[sectionKey][questionRef]["text-reponses"])
    let correct = $state(data[sectionKey][questionRef]["reponse-correcte"])

    let buttonsList = $state([("1", false), ("2", false), ("3", false), ("4", false)])

    function incrementLetter(letter) {
        return String.fromCharCode(letter.charCodeAt(0) + 1);
    }
    
    function initializeButtons() {
        buttonsList = answers.map((_, i) => [i + 1, false]);
    }

    function toggleButtonState(index) {
        buttonsList = buttonsList.map((item, i) =>
            i === index ? [item[0], !item[1]] : item
        );
    }

    function toggleCompletion() {
        
    }

    function submitAnswers() {
        explainationVisible = true

        let answersList = []
        
        let lenButtonList = buttonsList.length
        for (let i = 0; i < lenButtonList; i++) {
            if (buttonsList[i][1] == true) {
                answersList.push(i + 1)
                console.log(answersList)
            }
        }

        if (JSON.stringify(correct) === JSON.stringify(answersList)) {
            correctAnswer = true
        } else {
            correctAnswer = false
        }

        explainationVisible = true
    }

    function nextQuestion() {
        explainationVisible = false
        
        let answersList = []
        
        let lenButtonList = buttonsList.length
        for (let i = 0; i < lenButtonList; i++) {
            if (buttonsList[i][1] == true) {
                answersList.push(i + 1)
                console.log(answersList)
            }
        }
        $state.snapshot(correct)
        console.log(answersList)

        floorRef = incrementLetter(floorRef)
        if (JSON.stringify(correct) === JSON.stringify(answersList)) {
            console.log("Success")
            questionRef = data[sectionKey][questionRef]["redirect-success"]
            points[sectionNumber-1] += 1
        } else {
            console.log("Failure")
            questionRef = data[sectionKey][questionRef]["redirect-fail"]
            points[sectionNumber-1] -= 1
        }
        if (questionRef == "NEXT") {
            sectionNumber++
            sectionKey = "Section" + sectionNumber
            questionNumber = 1
            floorRef = "A"
            sectionName = data[sectionKey]["section-name"]
            questionRef = "A1"
        } else if (questionRef == "END") {
            for (let i = 0; i < 4; i++) {
                let moy = percentages[i] * points[i] / 3
                percentages[i] += Math.round(moy)
            }
            endReached = true
            return
        }
        console.log(questionRef)

        questionText = data[sectionKey][questionRef]["question"]
        answers = data[sectionKey][questionRef]["text-reponses"]
        correct = data[sectionKey][questionRef]["reponse-correcte"]

        initializeButtons()
    }
    
    // FROM HANDLING
    let userdata_lastName = $state()
    let userdata_firstName = $state()
    let userdata_email = $state()
    let userdata_phoneNumber = $state()
    $inspect(userdata_email, userdata_firstName, userdata_lastName, userdata_phoneNumber)

    function saveDataHandleResults(event) {
        if (event) {
            event.preventDefault();
            console.log("Prevented default!"); 
        }

        if (!(userdata_email != undefined && userdata_firstName != undefined && userdata_lastName != undefined && userdata_phoneNumber != undefined)) {
            console.log("something not right")
            return
        }
        
        const user = {
            email: userdata_email,
            firstName: userdata_firstName,
            lastName: userdata_lastName,
            phoneNumber: userdata_phoneNumber
        };

        // try {
        const response = fetch("http://localhost:3126/addUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });

        userSignedIn = true

            // const result = await response.json();
            // console.log(result);
        // } catch (error) {
        //     console.error("Error adding user:", error);
        // }

    }


    // WHEN DOM LOADED
    onMount(() => {
        initializeButtons();
        $inspect(buttonsList)
    });
</script>
<style>
    .titre{
        font-family: 'IBMplexMono';
    }
</style>
<div class="h-screen overflow-hidden">
    <section class="w-screen bg-[#ffffdc] border-1 ">
        <div id="section-title" class="flex flex-row items-center font-bold text-[#1E293B] bg-[#fff0dc]">
            <img src="iconetxt2.png" alt="Logo" class="w-[150px] h-[50px] object-contain ml-5 absolute"/>
            <h1 id="title-text" class="text-4xl underline pt-10 pb-10 text-center flex-1 titre">Section: {endReached == false ? sectionName : "Questionnaire complété."}</h1>
        </div>
    </section>
    <div class="flex">
        <section class="flex flex-col items-center justify-center min-w-[75%] min-h-full pt-5 px-5 bg-[#f9f6f1] pb-[20rem] border-r border-black">
            {#if endReached == false}
            <div id="answers" class="flex flex-col items-center">
                <div id="question-title" class="pb-10 text-2xl text-center">
                    <h2 id="question-text" class="font-family titre">   
                        Question {questionRef}: {questionText} <br>
                        (Plusieurs réponses disponibles)
                    </h2>
                </div>
                {#each answers as answer, i}
                    <button
                        in:fade
                        out:fade
                        id="Button-{i + 1}"
                        class={
                        buttonsList[i][1] === false
                        ? "text-white border-4 bg-[#1E293B] border-black border-double text-2xl flex justify-center items-center rounded-4xl w-[40rem] h-[6rem] mb-5"
                        : "text-white border-4 bg-[green] border-black border-double text-2xl flex justify-center items-center rounded-4xl w-[40rem] h-[6rem] mb-5"
                        }
                        aria-label="{answer}"
                        onclick={() => {toggleButtonState(i)}}
                    >{answer}</button>
                    <br>
                {/each}
                <div id="sendButton-container">
                    <button onclick={() => submitAnswers()} class="hover:bg-[darkcyan] titre text-white bg-black border-double border-4 flex justify-center items-center w-[40rem] h-[3rem] titre" id="sendButton">
                        Confirmer la réponse →
                    </button>
                </div>
            </div>
            {/if}
            {#if endReached == true}
            <div id="end-title" class="pb-10 text-2xl text-center">
                <h2 id="end-title-text" class="font-family titre">Merci d'avoir complété le questionnaire. Pour obtenir vos résultats, inscrivez-vous!</h2>
            </div>
            <div id="end-form" class="flex justify-center">
                <div>
                    <input placeholder="Nom" bind:value={userdata_lastName} id="mail-input" class="m-2">
                    <input placeholder="Prénom" bind:value={userdata_firstName} id="mail-input" class="m-2">
                    <br>
                    <input placeholder="Votre addresse mail" bind:value={userdata_email} id="mail-input" class="m-2">
                    <input placeholder="Votre numéro de tél" bind:value={userdata_phoneNumber} id="mail-input" class="m-2">
                    <br><br>
                <div class="flex justify-center items-center">
                    <button 
                        id="form-send" 
                        type="button"
                        onclick={(e) => { e.preventDefault(); saveDataHandleResults(e); }} 
                        class="flex justify-self-center border-black border-2 bg-white rounded-[5rem] p-2 hover:bg-green-600"
                    >
                        S'inscrire
                    </button>
                </div>
            </div>
        </div>
            {/if}
        </section>
        <section class="bg-[#ebebeb] min-w-[25%] min-h-screen border border-black flex flex-nowrap">
            <div id="annotation-div" class="flex flex-col">
                {#if explainationVisible}
                <h1 in:fade out:fade id="resultat-question" class={correctAnswer == true ? "text-center text-green-500 text-8xl mb-10 mt-10" : "text-center mb-10 text-red-500 text-8xl pg-5 mt-10"}>{correctAnswer == true ? "✅" : "❌"}</h1>
                <p in:typewriter out:fade id="annotation-text" class="text-1xl pg-10">
                    {data[sectionKey][questionRef]["annotation"]}
                </p>
                <div in:fade out:fade class="flex justify-center items-center  ">
                    <button onclick={nextQuestion} id="annotation-continue" class="titre bg-[#BA8E23] text-2xl rounded-full text-white border-1 border-white max-h-screen w-[30rem] mt-10"><u>continuer→</button>
                </div>
                {/if}
                {#if endReached && userSignedIn}
                <h1 id="end-title" class="titre font-bold pb-10 pt-5 flex justify-center text-2xl" >
                    <u>Statistiques du quizz:
                </h1>
                    <div class="grid grid-cols-2 grid-rows-2 gap-4">
                    {#each compteurs as compteur, i}
                        <div id="end-compteur{i+1}" class=" flex items-center justify-center" >
                            <h2 id="title-compteur{i+1}" class="bg-[#95ff85] object-cover titre border-1 border-black rounded-2xl p-1 h-[7.5rem] text-sm w-[7.5rem]">{compteur}: {percentages[i]}%</h2>
                        </div>
                    {/each}
                    </div>
                    <p class="text-xs pt-10 pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button id="export-to-pdf" class="bg-blue-500 rounded-[32px] border-1 border-black">Exporter en PDF</button>
                {/if}
            </div>
        </section><!--pour le compteur on fait une barre qui se remplie avec les pourcentages qui sont ecris desssis-->
    </div>
</div>
