<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class="bx bx-arrow-to-left"></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <div class="container">
                <ul class="navbar-nav justify-content-around flex-grow-1 gap-1">
                    <li class="nav-item ">
                        <router-link to="/">
                            <a class="nav-link" href="/">
                                <div class="parent-icon"><i class="fa-solid fa-hotel"></i>
                                </div>
                                <div class="menu-title text-nowrap">Trang chủ</div>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/truyen-hot">
                            <a class="nav-link" href="/truyen-hot">
                                <div class="parent-icon"><i class="fa-solid fa-hotel"></i>
                                </div>
                                <div class="menu-title text-nowrap">Truyện hot</div>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/theo-doi">
                            <a class="nav-link" href="/theo-doi">
                                <div class="parent-icon"><i class="fa-solid fa-hotel"></i>
                                </div>
                                <div class="menu-title text-nowrap">Theo dõi</div>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/lich-su">
                            <a class="nav-link" href="/lich-su">
                                <div class="parent-icon"><i class="fa-solid fa-hotel"></i>
                                </div>
                                <div class="menu-title text-nowrap">Lịch sử</div>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <router-link to="/the-loai">
                            <a class="nav-link" href="/the-loai">
                                <div class="parent-icon"><i class="fa-solid fa-hotel"></i>
                                </div>
                                <div class="menu-title text-nowrap">Thể loại</div>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/xep-hang">
                            <a class="nav-link" href="/xep-hang">
                                <div class="parent-icon"><i class="fa-solid fa-hotel"></i>
                                </div>
                                <div class="menu-title text-nowrap">Xếp hạng</div>
                            </a>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>