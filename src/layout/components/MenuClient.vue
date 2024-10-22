<template>
    <div class="d-flex justify-content-around mt-3">
        <div style="height: 80px;">
            <div style="font-family: 'Pacifico', cursive;
            font-size: 40px;
            color: #f44336;
            position: relative; margin-left: 40px;">Haytruyen!
            </div>
        </div>
        <div class="nav primary-menu mt-1" style=" height: 40px">
            <nav class="navbar navbar-expand-xl w-100">
                <ul class="navbar-nav justify-content-center flex-grow-1 gap-1">
                    <li class="nav-item">
                        <router-link to="/page1">
                            <a class="nav-link" href="/page1">
                                <div class="menu-title" style="font-size: 20px">
                                    TRUYỆN HOT
                                </div>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/page1">
                            <a class="nav-link" href="/page1">
                                <div class="menu-title" style="font-size: 20px">THỂ LOẠI</div>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/page1">
                            <a class="nav-link" href="/page1">
                                <div class="menu-title" style="font-size: 20px">LỊCH SỬ</div>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/page1">
                            <a class="nav-link" href="/page1">
                                <div class="menu-title" style="font-size: 20px">
                                    THEO DÕI
                                </div>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/page1">
                            <a class="nav-link" href="/page1">
                                <div class="menu-title" style="font-size: 20px">
                                    XẾP HẠNG
                                </div>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/page1">
                            <a class="nav-link" href="/page1">
                                <div class="menu-title" style="font-size: 20px">KHUYẾN MÃI</div>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/page1">
                            <a class="nav-link" href="/page1">
                                <div class="menu-title" style="font-size: 20px">LIÊN HỆ</div>
                            </a>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="user-box dropdown">
						<a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret show" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
							<img src="../../assets/images/avatars/avatar-2.png" class="user-img" alt="user avatar">
							<div class="user-info ps-3">
								<p class="user-name mb-0">Pauline Seitz</p>
								<p class="designattion mb-0">Web Designer</p>
							</div>
						</a>
						<ul class="mt-2 dropdown-menu dropdown-menu-end show" data-bs-popper="static">
							<li><a class="dropdown-item" href="javascript:;"><i class="bx bx-user"></i><span>Profile</span></a>
							</li>
							<li><a class="dropdown-item" href="javascript:;"><i class="bx bx-cog"></i><span>Settings</span></a>
							</li>
							<li><a class="dropdown-item" href="javascript:;"><i class="bx bx-home-circle"></i><span>Dashboard</span></a>
							</li>
							<li><a class="dropdown-item" href="javascript:;"><i class="bx bx-dollar-circle"></i><span>Earnings</span></a>
							</li>
							<li><a class="dropdown-item" href="javascript:;"><i class="bx bx-download"></i><span>Downloads</span></a>
							</li>
							<li>
								<div class="dropdown-divider mb-0"></div>
							</li>
							<li><a class="dropdown-item" href="javascript:;"><i class="bx bx-log-out-circle"></i><span>Logout</span></a>
							</li>
						</ul>
		</div>
    </div>
</template>