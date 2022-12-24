// Funtion that doubles the image array and then randomly shuffles them, then assigns id
const shuffle = () => {
    const assets = [
        { image: '/assets/css.png' },
        { image: '/assets/go.png' },
        { image: '/assets/html5.png' },
        { image: '/assets/js.png' },
        { image: '/assets/next.png' },
        { image: '/assets/node.png' },
        { image: '/assets/react.png' },
        { image: '/assets/ts.png' },
    ]
    const cards = [...assets, ...assets]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));

    return cards;
}
export default shuffle;