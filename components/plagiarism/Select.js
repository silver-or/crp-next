export function Select() {
    return(<>
        <div style={{display:"flex", float:"left"}}>
            <div class="card" style={{width: 18+"rem"}}>
            <img src="https://img.freepik.com/free-vector/illegal-pirate-paper-document-pirated-content-flat-vector-illustration_124715-1535.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/analysis/analysis" class="btn btn-outline-dark">표절 검사</a>
                </div>
            </div> &nbsp; &nbsp;
            <div class="card" style={{width: 18+"rem"}}>
                <img src="https://img.freepik.com/free-vector/data-analysis-illustration-flat-style-design_159144-40.jpg?w=2000" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/plagiarism/result" class="btn btn-outline-dark">악보 분석</a>
                    </div>
            </div>
        </div>

    </>)
}