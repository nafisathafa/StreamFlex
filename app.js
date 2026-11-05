// ---------- Movie data: [image, title, description] ----------
const ROWS = {
    "rows-1": [
        ["TOP PICKS FOR YOU", [
            ["wednesday.jpeg", "WEDNESDAY", "Wednesday Addams investigates a series of murders at her eerie boarding school while embracing her psychic powers."],
            ["squid.jpeg", "SQUID GAME", "Desperate contestants play deadly children's games for a massive cash prize in a twisted survival competition."],
            ["money.jpeg", "MONEY HEIST", "A mastermind called \"The Professor\" leads a group of criminals to pull off the biggest heist in Spanish history."],
            ["friends.jpeg", "F.R.I.E.N.D.S", "Six friends navigate love, careers, and life's ups and downs in New York City."],
            ["manifest.jpeg", "MANIFEST", "Passengers reappear after a mysterious 5-year disappearance, uncovering hidden truths and divine purpose."],
            ["you.jpeg", "YOU", "A charming bookstore manager turns into a stalker and killer in the name of love and obsession."],
            ["hierarchy.jpeg", "HIERARCHY", "A tense Korean teen drama where elite students guard secrets and power at a prestigious high school."]
        ]],
        ["NEW RELEASES", [
            ["bridgerton3.jpeg", "BRIDGERTON", "High society scandals, romance, and intrigue unfold in Regency-era London through the eyes of the Bridgerton family."],
            ["xokitty.jpeg", "XO, KITTY", "A Korean-American teen moves to Seoul to reunite with her long-distance boyfriend and discover her own identity."],
            ["royals.jpeg", "THE ROYALS", "A fictional royal family navigates love, power, and betrayal behind palace doors."],
            ["court.jpeg", "THE COURT", "A legal and political drama delving into the power plays and moral dilemmas inside a high-stakes courtroom."],
            ["raising voice.jpeg", "RAISING VOICES", "A Spanish teen exposes the truth about a sexual assault at her elite school, sparking a powerful movement."],
            ["euphoria.jpeg", "EUPHORIA", "A raw and intense look at a group of high schoolers as they grapple with addiction, love, trauma, and identity."],
            ["amaran.jpeg", "AMARAN", "A mysterious tale shrouded in intrigue."]
        ]]
    ],
    "rows-2": [
        ["TOP TV SHOWS", [
            ["outerbanks.jpeg", "OUTER BANKS", "Teen treasure hunters navigate love and danger on the Carolina coast."],
            ["vampire.jpeg", "VAMPIRE DIARIES", "A teenage girl is torn between two vampire brothers in a supernatural saga."],
            ["culpamia.jpeg", "CULPA MIA", "A passionate romance unfolds amidst family secrets."],
            ["culpatuya.jpeg", "CULPA TUYA", "Intense emotions and consequences in a turbulent love story."],
            ["myfault.jpeg", "MY FAULT: LONDON", "A dramatic continuation of forbidden love in a new city."],
            ["allofusaredead.jpeg", "ALL OF US ARE DEAD", "High school students fight for survival during a zombie outbreak."],
            ["lucifer.jpeg", "LUCIFER", "The Devil abandons Hell to solve crimes and explore humanity in Los Angeles."]
        ]],
        ["BOLLYWOOD MUST-WATCH", [
            ["3 idiots.jpeg", "3 IDIOTS", "Three engineering students challenge the norms of the Indian education system."],
            ["shershah.jpeg", "SHERSHAH", "A biographical war film depicting the valor of Captain Vikram Batra."],
            ["shiddat.jpeg", "SHIDDAT", "An intense journey of love and passion that transcends boundaries."],
            ["animal.jpeg", "ANIMAL", "A complex exploration of familial relationships and inner turmoil."],
            ["ashiqui.jpeg", "ASHIQUI 2", "A tragic love story between a fading singer and his protégé."],
            ["do patti.jpeg", "DO PATTI", "A suspenseful thriller that unravels dark secrets hidden in the mountains."],
            ["jab we met.jpeg", "JAB WE MET", "A chance train encounter leads to a transformative journey of self-discovery."]
        ]],
        ["INTERNATIONAL SERIES", [
            ["witcher.jpeg", "THE WITCHER", "A mutated monster-hunter struggles to find his place in a world where people often prove more wicked than beasts."],
            ["13 reasons.jpeg", "13 REASONS WHY", "A teenager uncovers the reasons behind his classmate's tragic decision."],
            ["spiderman.jpeg", "SPIDER-MAN", "A young man gains spider-like abilities and fights crime in New York City."],
            ["ellite.jpeg", "ELITE", "Wealthy teens at an exclusive school navigate love, lies, and murder."],
            ["ginny & georgia.jpeg", "GINNY & GEORGIA", "A mother-daughter duo seeks a fresh start, hiding secrets from their past."],
            ["emily.jpeg", "EMILY IN PARIS", "An American marketing executive navigates work and romance in Paris."],
            ["peaky.jpeg", "PEAKY BLINDERS", "A gangster family rises to power in post-WWI Birmingham."]
        ]],
        ["KDRAMA", [
            ["lovely.jpeg", "LOVELY RUNNER", "A time-travel romance between a fan and her favorite idol."],
            ["true.jpeg", "TRUE BEAUTY", "A high school girl masters makeup to transform her appearance and social status."],
            ["twinkling.jpeg", "TWINKLING WATERMELON", "A musical journey bridging generations and healing family bonds."],
            ["my demon.jpeg", "MY DEMON", "A romantic fantasy where a powerful demon and a human woman form an unexpected bond."],
            ["vincen.jpeg", "VINCENZO", "A Korean-Italian lawyer takes on a corrupt conglomerate using mafia tactics."],
            ["business.jpeg", "BUSINESS PROPOSAL", "A blind date leads to unexpected office romance and comedic chaos."],
            ["twenty five.jpeg", "TWENTY-FIVE TWENTY-ONE", "A nostalgic story of youth, dreams, and first love set against the backdrop of the late '90s."]
        ]],
        ["TRENDING NOW", [
            ["maxton.jpeg", "MAXTON HALL", "Elite students at a prestigious school navigate ambition, love, and betrayal."],
            ["royals.jpeg", "THE ROYALS", "A fictional Rajasthani royal family deals with scandals and personal dilemmas."],
            ["missmatched.jpeg", "MISMATCHED", "Two opposites meet at a tech institute and discover unexpected connections."],
            ["it ends with us.jpeg", "IT ENDS WITH US", "A woman's journey through love, resilience, and difficult choices."],
            ["nadaaniyan.jpeg", "NADAANIYAN", "A light-hearted comedy that showcases the quirks of everyday family life."],
            ["buried.jpeg", "BURIED HEARTS", "A poignant tale of love, loss, and healing."],
            ["qot.jpeg", "QUEEN OF TEARS", "A powerful woman faces personal and professional challenges in a male-dominated world."]
        ]],
        ["TEEN TV SHOWS", [
            ["never have i ever.jpeg", "NEVER HAVE I EVER", "A coming-of-age comedy about a first-generation Indian-American teenager."],
            ["maxton.jpeg", "MAXTON HALL", "A teen drama exploring love and class conflict in an elite boarding school."],
            ["ellite.jpeg", "ELITE", "A gripping mystery series set in a prestigious high school with deadly secrets."],
            ["gossip girl.jpeg", "GOSSIP GIRL", "Privileged teens' secrets are exposed by an anonymous blogger."],
            ["kissing booth.jpeg", "THE KISSING BOOTH", "A high school girl's secret romance tests her lifelong friendship."],
            ["glimore girls.jpeg", "GILMORE GIRLS", "A mother and daughter navigate life and love in a quirky small town."],
            ["hierarchy.jpeg", "HIERARCHY", "Power dynamics and secrets unravel within an elite institution."]
        ]],
        ["HORROR", [
            ["1920 london.jpeg", "1920 LONDON", "A woman seeks help to save her possessed husband in 1920s London."],
            ["chhori.jpeg", "CHHORII 2", "A chilling horror sequel where a woman confronts haunting supernatural forces."],
            ["nun.jpeg", "THE NUN", "A priest and a novice uncover unholy secrets in a Romanian abbey."],
            ["halloween.jpeg", "HALLOWEEN", "A classic slasher film featuring the iconic killer Michael Myers."],
            ["annabelle.jpeg", "ANNABELLE", "A possessed doll brings terror to a young couple's life."],
            ["raaz.jpeg", "RAAZ", "A couple's retreat turns sinister as hidden secrets emerge."],
            ["stree.jpeg", "STREE", "A small town is haunted by a female spirit who abducts men at night."]
        ]],
        ["ANIME", [
            ["naruto.jpeg", "NARUTO", "A young ninja strives to become the strongest leader in his village."],
            ["demon slayer.jpeg", "DEMON SLAYER", "A boy becomes a demon slayer after his family is slaughtered."],
            ["one piece.jpeg", "ONE PIECE", "A pirate crew searches for the ultimate treasure in a vast ocean world."],
            ["blood of zeus.jpeg", "BLOOD OF ZEUS", "A demigod battles demons and gods in ancient Greece."],
            ["suzume.jpeg", "SUZUME", "A beautifully animated adventure about a girl who must close magical doors to prevent disasters."],
            ["arcane.jpeg", "ARCANE", "Two sisters from rival worlds are caught on opposite sides of a conflict between Piltover and Zaun."],
            ["black clover.jpeg", "BLACK CLOVER", "A boy without magic aims to become the Wizard King in a magical world."]
        ]]
    ]
};

// ---------- Build the rows ----------
function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

function buildRow([title, items]) {
    const container = el("div", "movie-list-container");
    container.appendChild(el("h1", "movie-list-title", title));

    const wrapper = el("div", "movie-list-wrapper");
    const list = el("div", "movie-list");

    items.forEach(([img, name, desc]) => {
        const item = el("div", "movie-list-item");
        const image = el("img", "movie-list-item-img");
        image.src = img;
        image.alt = name;
        image.loading = "lazy";
        item.append(image, el("span", "movie-list-item-title", name), el("p", "movie-list-item-desc", desc), el("button", "movie-list-item-button", "Watch"));
        list.appendChild(item);
    });

    const arrow = el("i", "fas fa-chevron-right arrow");
    wrapper.append(list, arrow);
    container.appendChild(wrapper);
    return container;
}

Object.entries(ROWS).forEach(([slotId, rows]) => {
    const slot = document.getElementById(slotId);
    rows.forEach((row) => slot.appendChild(buildRow(row)));
});

// ---------- Row arrows (scroll, then loop back) ----------
document.querySelectorAll(".movie-list-wrapper").forEach((wrapper) => {
    const list = wrapper.querySelector(".movie-list");
    const arrow = wrapper.querySelector(".arrow");
    const STEP = 300; // 270px image + 30px margin
    let offset = 0;

    arrow.addEventListener("click", () => {
        const maxOffset = Math.max(0, list.scrollWidth - wrapper.clientWidth);
        offset = offset >= maxOffset ? 0 : Math.min(offset + STEP, maxOffset);
        list.style.transform = `translateX(-${offset}px)`;
    });

    window.addEventListener("resize", () => {
        offset = 0;
        list.style.transform = "translateX(0)";
    });
});

// ---------- Dark / light toggle ----------
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// ---------- Trailer modal ----------
const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");

function openVideo(src) {
    modalVideo.src = src;
    modal.style.display = "flex";
    modalVideo.play().catch(() => {});
}

function closeVideo() {
    modalVideo.pause();
    modalVideo.removeAttribute("src");
    modalVideo.load();
    modal.style.display = "none";
}

modal.addEventListener("click", (e) => { if (e.target === modal) closeVideo(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeVideo(); });