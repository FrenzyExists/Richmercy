<template>
    <div class="ul flex justify-evenly p-0">
        <article class="booking-card   rounded-3xl overflow-hidden transition text-center mb-7 relative bg-zinc-900 shadow-lg">
            <div class="mb-4 relative container after:bg-gradient-to-r from-orange-400 to-red-500">
                <font-awesome-icon class="object-cover w-full text-[14rem] pl-8" :icon="`${skillIcon}`" />
            </div>
            <div class="book-container">
                <div class="content relative opacity-0 flex text-center items-center justify-center h-0">
                    <button class="btn bg-none uppercase text-slate-100 font-bold cursor-pointer text-base">Show More</button>
                </div>
            </div>

            <div class="informations-container">
                <h2 class="title  relative font-bold text-lg mb-3 pb-3 ">{{ skillName }}</h2>
                <p class="sub-title">{{ skillDescription }}</p>
                <div class="opacity-0 more-information">
                    <div class="box mb-1 mt-3 p-3 text-sm font-bold bg-slate-100 rounded-xl">
                        <ul v-if="typeof skillProjectList !== 'undefined'">
                            <li class="decoration-[none] relative text-base after:bg-gradient-to-r from-orange-400 to-red-500" v-for="i in skillProjectList">{{ i }}</li>
                        </ul>
                        <p class="text-orange-800 leading-7 font-medium text-lg" v-else>Can't think of anything lol</p>
                    </div>
                </div>
            </div>
        </article>

    </div>
</template>

<script>
export default {
    props: {
        skillName: {
            type: String,
            required: true
        },
        skillDescription: {
            type: String,
            required: false
        },
        skillIcon: {
            type: String
        },
        skillProjectList: {
            type: Array,
            required: false
        }
    }
}
</script>

<style>
.container {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

.container:after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* border-radius: 20px 20px 0 0; */
    opacity: 0.7;
}

.card {
    border-radius: 20px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.18);
}

.ul .booking-card {
    flex: 0 0 290px;
    /* border-radius: 20px;  */
}

.booking-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(167 90 34 / 2%);
    transition: 0.3s;
    /* border-radius: 20px; */
}

.content {
    transform: translateY(-300px);
    transition: 0.3s;
}

.box ul li {
    color: #1d2336;
    padding: 7px 0;
}

.box ul li:hover::after {
    left: 30%;
    width: 40%;
}

.box ul li::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0%;
    height: 2px;
    transition: 0.3s ease-out;
}

.btn {
    border: 3px solid white;
    padding: 10px 15px;
    transition: 0.3s;
}

.btn:hover {
    background: #e9e9e9;
    border: 0.45rem solid #e9e9e9;
    color: #1d2336;
}

.informations-container {
    flex: 1 0 auto;
    padding: 20px;
    transform: translateY(70px);
    transition: 0.3s;
}

.title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    width: 50px;
    margin: auto;
    background: #b34c35;
}

.more-information {
    transition: 0.3s;
}

.box {
    flex: 1 0;
}

.booking-card:hover::before {
    background: rgb(156 181 255 / 31%);
}

.booking-card:hover .book-container .content {
    opacity: 1;
    transform: translateY(-130px);
}

.booking-card:hover .informations-container {
    transform: translateY(0px);
}

.booking-card:hover .informations-container .more-information {
    opacity: 1;
}

@media (max-width: 768px) {
    .booking-card::before {
        background: rgb(64 109 243 / 13%);
    }

    .booking-card .book-container .content {
        opacity: 1;
        transform: translateY(-130px);
    }

    .booking-card .informations-container {
        transform: translateY(0px);
    }

    .booking-card .informations-container .more-information {
        opacity: 1;
    }
}
</style>