<template>
    <div class="min-h-screen flex flex-col">
        <header class="bg-gray-800 p-4 text-white">
            <h1>Admin Layout</h1>
            <nav class="flex justify-center gap-5">
                <RouterLink to="/admin">Home</RouterLink>
                <RouterLink to="/admin/login">Login</RouterLink>
            </nav>
        </header>
        <main class="flex-grow p-6">
            <RouterView/>
        </main>
        <footer class="bg-gray-800 text-center text-white p-4 mt-auto">
            © 2024 Admin Dashboard
        </footer>
    </div>
</template>
