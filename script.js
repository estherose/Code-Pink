let wardrobe = {
    top: [],
    bottom: [],
    shoes: [],
    accessory: []
};

const quotes = [
    "One second, finding something your ex will regret seeing...",
    "Consulting the fashion gods...",
    "Checking if we can make this look 'Main Character' enough...",
    "Style is a way to say who you are without speaking. Or just looking hot."
];

function addItem() {
    const input = document.getElementById('itemInput');
    const category = document.getElementById('categorySelect').value;
    
    if (input.value.trim() === "") return;

    wardrobe[category].push(input.value);
    
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.innerText = `${category}: ${input.value}`;
    document.getElementById('wardrobeDisplay').appendChild(tag);
    
    input.value = "";
}

function generateOutfit() {
    // Check if wardrobe has enough items
    if (wardrobe.top.length === 0 || wardrobe.bottom.length === 0) {
        alert("Babe, you need at least a top and a bottom in your closet first!");
        return;
    }

    const loader = document.getElementById('loader');
    const result = document.getElementById('result');
    
    // Show loader and sassy quote
    result.style.display = 'none';
    loader.style.display = 'block';
    document.getElementById('sassyQuote').innerText = quotes[Math.floor(Math.random() * quotes.length)];

    setTimeout(() => {
        loader.style.display = 'none';
        result.style.display = 'block';

        const occasion = document.getElementById('occasion').value;
        const vibe = document.getElementById('vibe').value;

        // Logic to pick items
        const selectedTop = wardrobe.top[Math.floor(Math.random() * wardrobe.top.length)];
        const selectedBottom = wardrobe.bottom[Math.floor(Math.random() * wardrobe.bottom.length)];
        const selectedShoe = wardrobe.shoes.length > 0 ? wardrobe.shoes[Math.floor(Math.random() * wardrobe.shoes.length)] : "Your favorite heels";
        const selectedAcc = wardrobe.accessory.length > 0 ? wardrobe.accessory[Math.floor(Math.random() * wardrobe.accessory.length)] : "Confidence";

        document.getElementById('outfitTitle').innerText = `Your ${vibe} ${occasion} Look`;
        document.getElementById('outfitList').innerHTML = `
            <p><strong>Top:</strong> ${selectedTop}</p>
            <p><strong>Bottom:</strong> ${selectedBottom}</p>
            <p><strong>Shoes:</strong> ${selectedShoe}</p>
            <p><strong>Add:</strong> ${selectedAcc}</p>
        `;
        document.getElementById('stylingTip').innerText = `Sassy Tip: Wear this and walk like the sidewalk is your runway. ✨`;
    }, 2000);
}