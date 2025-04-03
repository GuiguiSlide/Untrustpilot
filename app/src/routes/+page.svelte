<script>
    import { goto } from '$app/navigation';

    function toQuestions() {
        goto('/question');
    }
    function toHygiene() {
        goto('/hygiene');
    }
</script>
<style>
    .titre{
        font-family: 'IBMplexMono';
    }
</style>
<section class="w-full h-full bg-[#f9f5f0] font-bold">
    <nav class="bg-[#fff0dc] w-full flex justify-between items-center h-18">
        <div class="flex flex-row items-center gap-2 ">
            <img class="w-20 h-20" src="icone.png" alt="">
            <h1 class="font-bold text-3xl titre">UntrustPilot</h1>
        </div>
        <ul class="flex flex-row gap-5 text-2xl">
            <li class="hover:underline titre"><a href="#buttonquestion">Formulaire</a></li>
            <li class="hover:underline titre"><a href="#About">A propos</a></li>
            <li class="hover:underline pr-5 titre"><a href="#map">Contact</a></li>
        </ul>
    </nav>
    <section class="w-full h-full bg-[#f9f5f0] font-bold pt-30">
        <div class='flex flex-column justify-center items-center w-full gap-10'>
            <h1 class="text-center font-bold text-5xl g-5 leading-15 mb-25 titre"> 
                Évaluez.<br><br> 
                Comprenez.<br><br> 
                Renforcez votre cybersécurité.
            </h1>
            <img src="icon2.png" alt="cybersécurité" class="w-[30rem] h-auto">
        </div>
    </section>
</section>
<section class="bg-[#fff0dc] w-full h-full item-center" id="buttonquestion">
    <div class="flex justify-center md:justify-evenly item-center h-full w-full p-20">
        <div  class="hygiene flex justify-center bg-[white] hover:bg-[#72cefe] rounded-full w-[15rem] h-[15rem] " style="border: 5px solid #000;">
            <button on:click={toHygiene} class="titre m-1"><u>↓cliquez ici↓<br>pour évaluer vos connaissances cyber</button>
        </div>
        <div class="question flex justify-center bg-[white] hover:bg-[#fe7272] rounded-full w-[15rem] h-[15rem] " style="border: 5px solid #000;">
            <button on:click={toQuestions} class="titre m-1"><u>↓cliquez ici↓<br> pour acceder aux questions</button>
        </div>
    </div>
</section>
<section id="About" class="flex flex-row justify-center items-center bg-[#f9f5f0] p-10">
    <img class="size-[40rem]" src="icone.png" alt="">
    <div class="text-center text-2xl">
        <div class="gap-5">
            <h3 class="font-bold titre">
                Qui sommes-nous ?
            </h3>
            <p class="m-2">
                Chez UntrustPilot, nous croyons que la cybersécurité ne doit pas être réservée aux experts.<br>
                C'est pourquoi nous avons conçu un outil simple, rapide et efficace pour vous aider à mesurer votre niveau d'hygiène numérique.
            </p>
        </div>
        <div class="mt-8 ">
            <h3 class="font-bold titre"> 
                Comment ça fonctionne ?
            </h3>
            <p class="m-5">
                Répondez à un questionnaire conçu par nos experts en cybersécurité, basé sur les meilleures pratiques du secteur. <br>
                En quelques minutes, vous obtiendrez une évaluation claire de vos connaissances et de vos habitudes.
            </p>
        </div>
        <div  class="mt-8 mb-10">
            <h3 class="font-bold titre">
                Recevez des recommandations personnalisées :
            </h3>
            <p class="m-5">
                À l'issue du questionnaire, nous vous fournissons un diagnostic détaillé ainsi que des conseils concrets pour renforcer votre sécurité numérique, adaptés à votre profil et à vos usages.<br>
                Que vous soyez particulier, professionnel ou entreprise, prenez le contrôle de votre cybersécurité avec UntrustPilot.
            </p>
        </div>
    </div>
</section>
<footer class="bg-[#fff0dc] w-full flex justify-center items-center h-[30rem] gap-50">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83670.18088342599!2d7.391057475676943!3d49.05445767104273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47942a067840d1dd%3A0x5e86f6a7bc6ba7d!2s57230%20Bitche!5e0!3m2!1sfr!2sfr!4v1743581201717!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="flex-row justify-center items-center text-center">
        <h1 class="titre"><u>Nous contacter</h1>
        <ul>
            <li class="flex flex-end">contact@notrustpilote.com</li>
            <li class="flex flex-end">02.98.25.12.45</li>
        </ul>
    </div>
</footer>
