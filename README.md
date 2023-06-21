min-height

        {/*<div className={s.circularContainer}>*/}
                       {/*    <div className={s.circularProgress}>*/}
                       {/*        <span className={s.progressValue}>50%</span>*/}
                       {/*    </div>*/}
                       {/*    <span className={s.circleText}>React</span>*/}
                       {/*</div>*/}

.circularContainer {
border: 1px solid darkred;
display: flex;
flex-direction: column;
align-items: center;
row-gap: 30px;
}

.circularProgress {
position: relative;
height: 200px;
width: 200px;
background: conic-gradient(#3a5ace 10deg, #111111 0deg);
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
animation: progress 2s ease-in-out forwards;
transition: all;
}

.circularProgress::before {
content: '';
position: absolute;
height: 197px;
width: 197px;
border-radius: 50%;
background-color: #111111;
}

.progressValue {
position: relative;
font-size: 40px;
font-weight: bold;
font-family: 'Poppins', sans-serif;
}

@keyframes progress {
0% {
background: conic-gradient(#3a5ace 10deg, #111111 0deg);
opacity: 0;
}
100% {
background: conic-gradient(#3a5ace 180deg, #111111 0deg);
opacity: 1;
}
}