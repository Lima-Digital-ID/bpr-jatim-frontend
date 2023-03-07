<template>
    <section class="py-5" id="container">
        <div class="row">       
            <div class="col-md-4">
                <div class="text-center">
                    <div class="row align-items-center" id="card">
                        <div class="col-md-2">
                            <img src="@/assets/images/tips/tipsATM.png" class="img-fluid" alt="">
                        </div>
                        <div class="col-md-10">
                            <h6>Content Section 1</h6>
                            <p>This is the content section.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class=" text-center">
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <img src="@/assets/images/tips/tipsATM.png" class="img-fluid" alt="">
                        </div>
                        <div class="col-md-10">
                            <h6>Content Section 2</h6>
                            <p>This is the content section.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class=" text-center">
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <img src="@/assets/images/tips/tipsATM.png" class="img-fluid" alt="">
                        </div>
                        <div class="col-md-10">
                            <h6>Content Section 3</h6>
                            <p>This is the content section.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </section>
</template>
  
<script>
export default {
    name : 'Carditem',
}
</script>
  
<style>
#container {
    background: #398DD7;
    height: 140px;
    margin-bottom: -30px;
    overflow: hidden;
}

p {
    color: white;
    font-size: 12px;
}

p, h6 {
    cursor: pointer;
}

.img-fluid {
    height: 50px;
    margin-top: -20px;
    margin-left: 100px;
}
</style>
  