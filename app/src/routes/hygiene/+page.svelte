<!--
<script>
    let data = 
</script>
-->

<div id="container" class="bg-[#a88732] w-[100vw] h-[100vh] flex justify-center items-center">
    <div id="containerquestion" class="w-[700px] h-[600px] bg-[#F9F6F1] rounded-[50px] flex flex-col justify-center items-center gap-[20px]">
        <div id="question" class="bg-blue-200 w-[95%] h-[15%] rounded-[50px]">Question {i}</div>
        {#each reponses as reponse}        
    
        <button id="rep{i}" class="bg-blue-200 w-[95%] h-[15%] rounded-[50px]" onclick={() => {
            updateReponse();
            i++;
            }}>
             {reponse}
         </button>
         {/each}
    </div>
</div>