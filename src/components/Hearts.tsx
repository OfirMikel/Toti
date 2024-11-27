import heartSvg from "../assets/heart.svg"

function Hearts() {
    return (
        <div className={"heart-container"}>
            {Array.from({ length: 5 }).map((_, index) => (
                <img
                    key={index}
                    src={heartSvg}
                    className={"heart-images"}
                    width={createRandomSize()}
                    height={createRandomSize()}
                    style={{
                        left: getRandomPositionOnScreen(),
                        bottom: getRandomStartBottom(),
                    }}
                    alt={"image"}
                />
            ))}
        </div>
    );
}

function createRandomSize() {
    return Math.floor(Math.random() * 200) + 50;
}

function getRandomPositionOnScreen() {
    return Math.floor(Math.random() * window.innerWidth) + "px";
}

function getRandomStartBottom() {
    return - (Math.floor(Math.random() * window.innerHeight) * 2 )+ "px"; // Random starting bottom position
}

export default Hearts;