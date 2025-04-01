<script>
    import { goto } from '$app/navigation';

    function toQuestions() {
        goto('/question');
    }
    function toHygiene() {
        goto('/hygiene');
    }
</script>
<section class="w-full h-full bg-[#F9F6F1] font-">
    <nav class="bg-[#EDE6DC] w-full flex justify-between items-center h-18">
        <div class="flex flex-row items-center gap-2 ">
            <img class="w-20 h-20" src="icone.png" alt="">
            <h1 class="font-bold text-3xl">UntrustPilot</h1>
        </div>
        <ul class="flex flex-row gap-5 text-2xl">
            <li class="hover:underline"><a href=".">Formulaire</a></li>
            <li class="hover:underline"><a href="#About">A propos</a></li>
            <li class="hover:underline pr-5"><a href=".">Contact</a></li>
        </ul>
    </nav>
    <div class='flex flex-column justify-center items-center w-full my-30 gap-10'>
        <h1 class="text-center font-bold text-5xl g-5 leading-15"> 
            Évaluez.<br><br> 
            Comprenez.<br><br> 
            Renforcez votre cybersécurité.<br><br> 
        </h1>
        <img src="icon2.png" alt="cybersécurité" class="w-[30rem] h-auto ">
    </div>
    <div  class="flex flex-row h-[20rem]">
        <div class="hygiene w-[50%] flex justify-center hover:bg-red-500 hover:opacity-50% rounded-4xl " style="border: 1px solid #000;">
            <button on:click={toHygiene}>Hygiene</button>
        </div>
        <div class="question w-[50%] flex justify-center hover:bg-blue-500 rounded-4xl" style="border: 1px solid #000;">
            <button on:click={toQuestions}>Questions</button>
        </div>
    </div>
<section id="About" class="flex flex-row justify-center items-center mt-50">
    <img class="size-[40rem]" src="icone.png" alt="">
    <div class="text-center text-2xl">
        <div class="gap-5">
            <h3 class="font-bold">
                Qui sommes-nous ?
            </h3>
            <p class="m-2">
                Chez UntrustPilot, nous croyons que la cybersécurité ne doit pas être réservée aux experts.<br>
                C'est pourquoi nous avons conçu un outil simple, rapide et efficace pour vous aider à mesurer votre niveau d'hygiène numérique.
            </p>
        </div>
        <div class="mt-8">
            <h3 class="font-bold"> 
                Comment ça fonctionne ?
            </h3>
            <p class="m-5">
                Répondez à un questionnaire conçu par nos experts en cybersécurité, basé sur les meilleures pratiques du secteur. <br>
                En quelques minutes, vous obtiendrez une évaluation claire de vos connaissances et de vos habitudes.
            </p>
        </div>
        <div  class="mt-8 mb-10">
            <h3 class="font-bold">
                Recevez des recommandations personnalisées :
            </h3>
            <p class="m-5">
                À l'issue du questionnaire, nous vous fournissons un diagnostic détaillé ainsi que des conseils concrets pour renforcer votre sécurité numérique, adaptés à votre profil et à vos usages.<br>
                Que vous soyez particulier, professionnel ou entreprise, prenez le contrôle de votre cybersécurité avec UntrustPilot.
            </p>
        </div>
    </div>
</section>


<footer class="bg-[#EDE6DC] w-full flex justify-center items-center h-[30rem] gap-50">
    <iframe title="map" class="w-[30%] h-[70%]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d490.8353181760124!2d14.44094272745226!3d35.87194579318544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e5044cbec3d09%3A0x5307e29c014c4b23!2sSt.%20Philip%20Bar%20%26%20Restaurant!5e1!3m2!1sfr!2sfr!4v1743517176436!5m2!1sfr!2sfr"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="flex-row justify-center items-center text-center">
        <h1>Nous contacter</h1>
        <ul>
            <li><input type="mail" name="" id="">contact@notrustpilote.com</li>
            <li>02.98.25.12.45</li>
        </ul>
    </div>
</footer>
</section>
