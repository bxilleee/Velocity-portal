function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Timer Logic
const targetDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000); // 3 days from now
setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('mins').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
}, 1000);

// Check Login
fetch('/api/user').then(res => res.json()).then(user => {
    if(user) {
        document.getElementById('auth-zone').innerHTML = `
            <div style="display:flex; align-items:center; gap:10px">
                <img src="https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png" style="width:40px; border-radius:50%">
                <div>
                    <div style="font-size:14px; font-weight:bold">${user.username}</div>
                    <div style="font-size:10px; color:#3b82f6">${user.roles.length > 0 ? 'Member' : 'Guest'}</div>
                </div>
            </div>
            <a href="/logout" style="color:red; font-size:12px; margin-top:10px; display:block">Logout</a>
        `;
    }
});
