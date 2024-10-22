<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://static.cdnno.com/storage/topbox/fe605b5d0384f0f4ba7d14aaf3ab8a3c.webp"
                                class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="https://static.cdnno.com/storage/topbox/f18a677dc34cc704c4aac87fefe3d755.webp"
                                class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="https://static.cdnno.com/storage/topbox/63851b89710251f8ceed852e388ebfa6.webp"
                                class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="container mt-2 ">
        <h5>
            <a href="">TRUYỆN ĐỀ CỬ >>></a>
        </h5>
    </div>
    <div class="container mt-2">
        <div class="row ">
            <template v-for="(value,index) in ds_truyen" :key="index">
                <div class="col-lg-6">
                    <router-link :to="'/truyen-doc/'+value.slug">
                        <a class="nav-link" href="/truyen-doc">
                            <div class="card mb-3 ">
                                <div class="row g-0">
                                    <div class="col-md-4 d-flex ">
                                        <div class="card-header">
                                            <img style="height: 235px;width: 180px;" v-bind:src="'https://otruyenapi.com/uploads/comics/' + value.thumb_url"
                                                class="img-fluid rounded-start" alt="...">
                                        </div>
                                    </div>
                                    <div class="col-md-8 d-flex ">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                {{ value.name }}</h5>
                                            <p class="card-text">
                                                {{ value.slug }}
                                            </p>
                                            <p class="card-text">
                                                <small class="text-body-secondary">
                                                    {{ value.updatedAt }}
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </router-link>
                </div>
            </template>
        </div>
    </div>
    <div class="container">
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://static.cdnno.com/storage/topbox/72ec77bd608fc4d1d0223a4f7ae17329.webp"
                        class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://static.cdnno.com/storage/topbox/5573f07e4e7a3901d1882c9afbdeec5b.webp"
                        class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://static.cdnno.com/storage/topbox/a0ddee50f971f7433e686b07ed6852d1.webp"
                        class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            ds_truyen: []
        }
    },
    mounted() {
        this.layDuLieuTruyen();
    },
    methods: {
        layDuLieuTruyen() {
            axios
                .get("https://otruyenapi.com/v1/api/home")
                .then((res) => {
                    this.ds_truyen = res.data.data.items;
                    console.log(this.ds_truyen);
                    
                })
        }
    },

}
</script>
<style></style>