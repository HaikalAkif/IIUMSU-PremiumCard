<template>
    <NuxtLayout name="navbar">
        <div class="container2">
            <div class="title">
                <h1 class="font-bold text-5xl">Student Union Premium Card</h1>
                <h5 class="limit">Limited Edition</h5>
            </div>
            <div class="base">
                <div class="card">
                    <img class="h-60 rounded-3xl -skew-y-3" src="~/assets/images/frontard.jpg" alt=""/>
                </div>
                <div class="cart">
                    <h5>In Stock</h5>
                    <div class="price">
                        <h2>RM17.00</h2>
                        <h4>RM22.00</h4>
                    </div>
                    <form>
                        <input type="text" placeholder="In Card Name*" required>
                        <input type="number" placeholder="Matric Number*" required>
                    </form>
                    <NuxtLink to="#" class="btn">
                        Buy Now
                    </NuxtLink>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup></script>

<style>
    * {
        border: 1px solid yellow;
    }
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
        padding-top: 30px;
        padding-left: 10%;
        text-align: left;
        display: flex;
        flex-direction: row;
        gap: 30px;
        align-items: flex-end;
    }
    .limit {
        font-size: 12px;
        border: 2px solid #000;
        border-radius: 4px;
        padding: 3px 6px;
        padding-bottom: 0;
    }
    .base {
        position: relative;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: row;
        width: max-content;
        height: max-content;
    }
    .card {
        padding: 120px;
    }
    .cart {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 20px 20px;
    }
    .price {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
    .price h2 {
        font-size: 55px;
        color: #121212;
        font-weight: 500;
    }
    .price h4 {
        font-size: 25px;
        color: red;
        font-weight: 200;
    }
    form {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        
    }
    input {
        width: 300px;
        padding: 6px 12px;
        border-radius: 6px;
        margin-bottom: 15px;
    }
    .btn {
        border-radius: 6px;
        background-color: #CDA82C;
        color: #121212;
        width: 300px;
        text-align: center;
        padding: 6px 12px;
    }

</style>