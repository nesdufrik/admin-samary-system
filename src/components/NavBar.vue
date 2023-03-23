<template>
    <header
        class="navbar navbar-expand-lg bd-navbar sticky-top bg-dark navbar-dark"
    >
        <nav
            class="container-xl bd-gutter flex-wrap flex-lg-nowrap"
            aria-label="Main navigation"
        >
            <RouterLink
                class="p-lg-3 my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
                :to="`/`"
                aria-label="Home"
            >
                <img src="../assets/logo-icon.png" alt="logo" />
            </RouterLink>

            <div class="d-flex">
                <button
                    class="navbar-toggler d-flex d-lg-none order-3 p-2"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#bdNavbar"
                    aria-controls="bdNavbar"
                    aria-label="Toggle navigation"
                >
                    <span class="material-icons-round"> menu </span>
                </button>
            </div>

            <div
                class="offcanvas-lg offcanvas-end flex-grow-1 bg-dark"
                tabindex="-1"
                id="bdNavbar"
                aria-labelledby="bdNavbarOffcanvasLabel"
                data-bs-scroll="true"
            >
                <div class="offcanvas-header px-4 pb-0">
                    <h5
                        class="offcanvas-title text-white"
                        id="bdNavbarOffcanvasLabel"
                    >
                        Samary
                    </h5>
                    <button
                        type="button"
                        class="btn-close btn-close-white"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        data-bs-target="#bdNavbar"
                    ></button>
                </div>

                <div class="offcanvas-body p-4 pt-0 p-lg-0">
                    <hr class="d-lg-none text-white-50" />

                    <ul class="navbar-nav flex-row flex-wrap ms-md-auto">
                        <li
                            class="nav-item col-6 col-lg-auto text-center"
                            v-for="elem in itemsNavBar"
                        >
                            <RouterLink
                                :to="`${elem.link}`"
                                class="nav-link py-2 px-0 px-lg-2"
                            >
                                <span class="material-icons-round">
                                    {{ elem.icon }}
                                </span>
                                <br />
                                {{ elem.title }}
                            </RouterLink>
                        </li>
                    </ul>
                    <hr class="text-white-50" />
                    <div
                        class="d-flex flex-row flex-wrap align-items-center py-2 px-5 px-lg-5"
                    >
                        <div class="flex-shrink-0 dropdown text-center">
                            <a
                                href="#"
                                class="d-block link-light text-decoration-none dropdown-toggle mb-lg-0 mb-2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    :src="avatar"
                                    alt="avatar"
                                    width="55"
                                    height="55"
                                    class="rounded-circle"
                                />
                            </a>
                            <span class="d-lg-none text-muted">{{ name }}</span>
                            <ul
                                class="dropdown-menu text-small shadow dropdown-menu-lg-end"
                            >
                                <li>
                                    <a
                                        href="#"
                                        class="dropdown-item fw-bold text-secondary"
                                    >
                                        <span
                                            class="material-icons-round align-middle"
                                            >settings</span
                                        >
                                        Configuraciones</a
                                    >
                                </li>
                                <li><hr class="dropdown-divider" /></li>
                                <li>
                                    <a
                                        href="#"
                                        class="dropdown-item fw-bold text-danger"
                                        @click="logout"
                                    >
                                        <span
                                            class="material-icons-round align-middle"
                                            >logout</span
                                        >
                                        Cerrar sesión</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuth } from '../composables/useAuth'
import { useNavBar } from '../composables/useNavBar'

const { logout } = useAuth()
const { itemsNavBar } = useNavBar()

const name = ref(localStorage.getItem('name'))
const avatar = ref(localStorage.getItem('avatar'))
</script>

<style lang="scss" scoped></style>
