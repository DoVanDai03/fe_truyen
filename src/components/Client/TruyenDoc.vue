<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://static.cdnno.com/storage/topbox/f18a677dc34cc704c4aac87fefe3d755.webp"
                                class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="https://static.cdnno.com/storage/topbox/f18a677dc34cc704c4aac87fefe3d755.webp"
                                class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="https://static.cdnno.com/storage/topbox/f18a677dc34cc704c4aac87fefe3d755.webp"
                                class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
        <br>
    </div>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-2">
                        <img style="width: 220px;height: 300px;" v-bind:src="seoSchema.image">
                    </div>
                    <div class="col-lg-9">
                        <h4 class="card-title ms-4 mt-1">{{ thong_tin_truyen.titleHead }}</h4>
                        <span class="ms-4 mt-4">{{seoSchema.director}}</span>
                        <div class=" mt-3">
                            <button type="button" class="btn btn-outline-primary ms-4" disabled>
                                <i class="fa-solid fa-hotel"></i>
                                Đánh dấu
                            </button>
                            <button type="button" class="btn btn-outline-primary ms-4" disabled>
                                <i class="fa-solid fa-hotel"></i>
                                Mục lục
                            </button>
                            <button type="button" class="btn btn-outline-primary ms-4" disabled>
                                <i class="fa-solid fa-hotel"></i>
                                Đánh giá
                            </button>
                            <button type="button" class="btn btn-outline-primary ms-4" disabled>
                                <i class="fa-solid fa-hotel"></i>
                                Thảo luận
                            </button>
                        </div>
                        <div class="ms-4 mt-3 text-wrap">
                            {{ thong_tin_truyen.descriptionHead }}
                        </div>
                        <div class="ms-4 mt-3">
                            <button type="button" class="btn btn-outline-danger" disabled>Chuyển sinh</button>
                            <button type="button" class="btn btn-outline-success ms-4" disabled>Ngôn tình</button>
                            <button type="button" class="btn btn-outline-secondary ms-4" disabled>Trinh
                                thám</button>
                            <button type="button" class="btn btn-outline-info ms-4" disabled>Xuyên không</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="d-flex justify-content-between" style="background-color: cornflowerblue;">
            <span class="m-2">
                <h6>CHƯƠNG MỚI</h6>
            </span>
            <span class="m-2">Xem thêm >>></span>
        </div>
        <br>
    </div>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-lg-4">
                        <span>
                            <h6 style="color: chocolate;">Chương 191: Thần thoại thời đại Thánh chiến, hoàn thiện tiểu
                                vũ trụ(2)</h6>
                        </span>
                        <span>
                            <i class="fa-solid fa-circle-info"></i>
                            20 phút trước.
                        </span>
                    </div>
                    <div class="col-lg-4">
                        <span>
                            <h6 style="color: chocolate;">Chương 191: Thần thoại thời đại Thánh chiến, hoàn thiện tiểu
                                vũ trụ(2)</h6>
                        </span>
                        <span>
                            <i class="fa-solid fa-circle-info"></i>
                            20 phút trước.
                        </span>
                    </div>
                    <div class="col-lg-4">
                        <span>
                            <h6 style="color: chocolate;">Chương 191: Thần thoại thời đại Thánh chiến, hoàn thiện tiểu
                                vũ trụ(2)</h6>
                        </span>
                        <span>
                            <i class="fa-solid fa-circle-info"></i>
                            20 phút trước.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://static.cdnno.com/storage/topbox/b37e8bf83ff29a13fd5d437cf3856e6a.webp"
                                class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="https://static.cdnno.com/storage/topbox/b37e8bf83ff29a13fd5d437cf3856e6a.webp"
                                class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="https://static.cdnno.com/storage/topbox/b37e8bf83ff29a13fd5d437cf3856e6a.webp"
                                class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="d-flex justify-content-between" style="background-color: wheat;">
            <span class="m-2">
                <h6>ĐỌC TRUYỆN >></h6>
            </span>
        </div>
        <br>
    </div>
    <!-- xem truyện  -->
    <div class="container">
        <h1> Chapter : {{ lay_truyen.chapter_name }}</h1>
        <!-- <template v-for="(value,index) in lay_anh_truyen" :key="index">
            <div class="row">
                <div class="col-lg-12 col-md-6">
                    <img v-bind:src="value.image_file" alt="">
                </div>
            </div>
        </template> -->
    </div>
    <!-- cùng tác giả  -->
    <div class="container">
        <div class="d-flex justify-content-between" style="background-color: wheat;">
            <span class="m-2">
                <h6>CÙNG TÁC GIẢ >></h6>
            </span>
        </div>
        <br>
    </div>
    <!-- ds cùng tác giả  -->
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-header text-center">
                        <img style="width: 250px; height: 350px;"
                            src="https://static.cdnno.com/poster/de-cho-nguoi-khe-uoc-tien-to-nguoi-trieu-hoan-than-thoai-lam-tinh/300.jpg?1725264415"
                            class="text-center" alt="...">
                    </div>
                    <div class="card-body">
                        <span class="text-wrap">
                            <div class="card-title text-center">
                                <h6>Để Cho Ngươi Khế Ước Tiên Tổ, Ngươi Triệu Hoán Thần Thoại Lam Tinh?</h6>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-header text-center">
                        <img style="width: 250px; height: 350px;"
                            src="https://static.cdnno.com/poster/de-cho-nguoi-khe-uoc-tien-to-nguoi-trieu-hoan-than-thoai-lam-tinh/300.jpg?1725264415"
                            class="text-center" alt="...">
                    </div>
                    <div class="card-body">
                        <span class="text-wrap">
                            <div class="card-title text-center">
                                <h6>Để Cho Ngươi Khế Ước Tiên Tổ, Ngươi Triệu Hoán Thần Thoại Lam Tinh?</h6>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-header text-center">
                        <img style="width: 250px; height: 350px;"
                            src="https://static.cdnno.com/poster/de-cho-nguoi-khe-uoc-tien-to-nguoi-trieu-hoan-than-thoai-lam-tinh/300.jpg?1725264415"
                            class="text-center" alt="...">
                    </div>
                    <div class="card-body">
                        <span class="text-wrap">
                            <div class="card-title text-center">
                                <h6>Để Cho Ngươi Khế Ước Tiên Tổ, Ngươi Triệu Hoán Thần Thoại Lam Tinh?</h6>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-header text-center">
                        <img style="width: 250px; height: 350px;"
                            src="https://static.cdnno.com/poster/de-cho-nguoi-khe-uoc-tien-to-nguoi-trieu-hoan-than-thoai-lam-tinh/300.jpg?1725264415"
                            class="text-center" alt="...">
                    </div>
                    <div class="card-body">
                        <span class="text-wrap">
                            <div class="card-title text-center">
                                <h6>Để Cho Ngươi Khế Ước Tiên Tổ, Ngươi Triệu Hoán Thần Thoại Lam Tinh?</h6>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <br>
    </div>
    <!-- đánh giá  -->
    <div class="container">
        <div class="card">
            <div class="card-body">
                <ul class="nav nav-tabs nav-danger" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" data-bs-toggle="tab" href="#dangercontact" role="tab"
                            aria-selected="true">
                            <div class="d-flex align-items-center">
                                <div class="tab-icon"><i class="bx bx-microphone font-18 me-1"></i>
                                </div>
                                <div class="tab-title">Đánh giá</div>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="tab-content mt-2">
                    <div class="tab-pane fade active show" id="dangercontact" role="tabpanel">
                        <div class="card mb-3">
                            <div class="card-body">
                                <textarea class="form-control mt-2" name="" id=""
                                    placeholder="Vui lòng nhập đánh giá..."></textarea>
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <div></div>
                                <button type="button " class="btn btn-primary">Đánh giá</button>
                            </div>
                            <div class="card-body">
                                <div class="comment">
                                    <div class="d-flex">
                                        <img class="m-2"
                                            src="https://static.cdnno.com/poster/dong-thoi-xuyen-qua-ta-dua-vao-chinh-ta/300.jpg?1725414393"
                                            style="border-radius: 100%;width: 40px;height: 40px;" alt="">
                                        <h6 class="card-title mt-3 ms-3">Lý Dạ Hành</h6>
                                    </div>
                                    <label for="" class="form-control">Truyên quá hay luôn ạ!</label>
                                    <br>
                                </div>
                                <div class="comment">
                                    <div class="d-flex">
                                        <img class="m-2"
                                            src="https://static.cdnno.com/poster/dong-thoi-xuyen-qua-ta-dua-vao-chinh-ta/300.jpg?1725414393"
                                            style="border-radius: 100%;width: 40px;height: 40px;" alt="">
                                        <h6 class="card-title mt-3 ms-3">Lý Dạ Hành</h6>
                                    </div>
                                    <label for="" class="form-control">Truyên quá hay luôn ạ!</label>
                                    <br>
                                </div>
                                <div class="comment">
                                    <div class="d-flex">
                                        <img class="m-2"
                                            src="https://static.cdnno.com/poster/dong-thoi-xuyen-qua-ta-dua-vao-chinh-ta/300.jpg?1725414393"
                                            style="border-radius: 100%;width: 40px;height: 40px;" alt="">
                                        <h6 class="card-title mt-3 ms-3">Lý Dạ Hành</h6>
                                    </div>
                                    <label for="" class="form-control">Truyên quá hay luôn ạ!</label>
                                    <br>
                                </div>
                                <div class="comment">
                                    <div class="d-flex">
                                        <img class="m-2"
                                            src="https://static.cdnno.com/poster/dong-thoi-xuyen-qua-ta-dua-vao-chinh-ta/300.jpg?1725414393"
                                            style="border-radius: 100%;width: 40px;height: 40px;" alt="">
                                        <h6 class="card-title mt-3 ms-3">Lý Dạ Hành</h6>
                                    </div>
                                    <label for="" class="form-control">Truyên quá hay luôn ạ!</label>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- footer  -->
    <div class="container">
        <hr>
        <h5 class="text-center">
            <span style="color: chocolate;">
                Mê Truyện Chữ là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được đóng góp nội dung từ các tác giả
                viết truyện và các dịch giả convert, dịch truyện, rất nhiều truyện hay và nổi bật được cập nhật nhanh
                nhất với đủ các thể loại tiên hiệp, kiếm hiệp, huyền ảo ...
            </span>
        </h5>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    props: ['slug'],
    data() {
        return {
            slug: this.$route.params.slug,
            id: this.$route.params.id,
            thong_tin_truyen: {},
            seoSchema:{},
            lay_truyen : [],
            // link_truyen : lay_truyen.chapter_api_data,
            lay_anh_truyen : [],
        };
    },
    mounted() {
        this.layThongTinTruyen();
        this.layseoSchema();
        this.layTruyen();
        // this.layAnhTruyen();
    },
    methods: {
        layThongTinTruyen() {
            axios
                .get('https://otruyenapi.com/v1/api/truyen-tranh/' + this.slug)
                .then((res) => {
                    this.thong_tin_truyen = res.data.data.seoOnPage;
                    // console.log(this.thong_tin_truyen);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        layseoSchema() {
            axios
                .get('https://otruyenapi.com/v1/api/truyen-tranh/' + this.slug)
                .then((res) => {
                    this.seoSchema = res.data.data.seoOnPage.seoSchema;
                    // console.log(this.seoSchema);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        layTruyen() {
            axios
                .get('https://otruyenapi.com/v1/api/truyen-tranh/' + this.slug)
                .then((res) => {
                    this.lay_truyen = res.data.data.item.chapters[0].server_data[0];
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        // layAnhTruyen() {
        //     axios
        //         .get(this.link_truyen)
        //         .then((res) => {
        //             this.lay_anh_truyen = res.data.data.item.chapter_image;
        //         })
        //         .catch((error) => {
        //             console.error(error);
        //         });
        // },
    }
}
</script>
<style></style>