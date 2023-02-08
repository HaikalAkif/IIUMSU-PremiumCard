<template>
    <NuxtLayout name="navbar">
        <div class="container2">
            <div class="title">
                <h1 class="font-bold text-4xl">CONTACT US</h1>
            </div>
            <div class="form">
                <div class="desc">
                    <div class="test">
                        <img src="~/assets/images/su_logo-full-yellow.png" alt="">
                        <h2>Student Union</h2>
                    </div>
                    <h4>Ready to help</h4>
                    <p>Any concern and problems can be<br>directly write your opinon here!</p>
                </div>
                <form>
                    <input type="text" placeholder="Your Name" required>
                    <input type="email" placeholder="Your Email Address" required>
                    <textarea name="" id="" cols="35" rows="10" placeholder="How Can We Help You?" required></textarea>
                    <input type="submit" value="Send Message" class="submit" required>
                </form>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>

</script>

<style scoped>
    .container2 {
    padding-left: 10%;
    padding-right: 10%;
    position: relative;
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    font-size: 26px;
}

.form {
    background-color: #121212;
    border-radius: 12px;
    padding: 20px 40px;
    margin: 0 10% 0 10%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 30px 30px 81px 3px rgba(100,100,100,0.7);
    -webkit-box-shadow: 30px 30px 81px 3px rgba(100,100,100,0.7);
    -moz-box-shadow: 30px 30px 81px 3px rgba(100,100,100,0.7);
}

.form .desc {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 10px 10px 200px 10px;
}

.desc .test {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.test img {
    height: 40px;
    width: 60px;
}

.desc h2{
    font-size: 36px;
    font-weight: 700;
    color: #CDA82C;
}

.desc h4 {
    font-size: 22px;
    font-weight: 400;
    color: #CDA82C;
}

.desc p {
    font-size: 16px;
    color: #CDA82C;
}


.form form{
    position: relative;
    width: 60%;
    display: flex;
    align-items: flex-end;
    justify-self: center;
    flex-direction: column;
}

.form form input, textarea {
    margin-bottom: 20px;
    padding: 12px 24px;
    border-radius: 5px;
    width: 70%;
    border: none;
}

.form .submit {
    background-color: #CDA82C;
    color: #121212;
    width: 30%;
    border-radius: 8px;
    padding: 12px 24pxS;
    transition: ease .4s;
}

.submit:hover {
    transform: scale(0.9);
}

.submit:focus {
    background-color: #efefef;
    color: #121212;
}
</style>