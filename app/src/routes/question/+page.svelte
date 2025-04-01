<style>
</style>

<script>
    let numeroQuestion = $state(0)
    let answers = $state(["Oui", "Non", "BAGUETTE", `SELECT password FROM users`])
</script>

<section class="w-screen flex justify-center">
    <div class="flex flex-col">
        <div id="question-title">
            <h1 id="question-text">Question {numeroQuestion}:</h1>
        </div>

        <div id="answers">
            {#each answers as answer, i}
                <button
                    id="button{i}"
                    class="text-emerald-300 bg-cyan-900 border-4 border-b-fuchsia-950 size-60 text-4xl"
                    aria-label="{answer}"
                    onclick={() => {
                        answers = ["afeiu", "afuhazz"];
                        numeroQuestion++
                    }}
                >{answer}</button>
                <br>
            {/each}
        </div>

    </div>
</section>