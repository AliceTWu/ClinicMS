<template>
    <div class="" id="header_top">
        <!--  <div class="layout">
          <div class="layout-ceiling">
              <div class="layout-ceiling-main">
                  <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <Form-item label="">
                      <Input v-model="value4" icon="android-search" placeholder="请输入..." style="width: 280px"></Input>
                    </Form-item>
                  </Form>
              </div>
          </div>
          <div class="layout-header">
              <div class="layout-logo"></div>
          </div>
      </div> -->
        <!-- <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form> -->
        <nav class="navbar navbar-inverse navbar-inverse_wrapper">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">门诊系统</a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="#">病人入口 <span class="sr-only">(current)</span></a></li>
                        <li><a href="#">访客&病人信息</a></li>
                        <li><a href="#">专家团队</a></li>
                        <li><a href="#">新闻</a></li>
                        <li><a href="#">预约</a></li>
                    </ul>
                    <form class="navbar-form navbar-right">
                        <!-- <div class="form-group">
                            <input type="text" class="form-control search-form" placeholder="请输入关键字...">
                        </div>
                        <button type="submit" class="btn btn-default"></button> -->
                        <Input v-model="value4" icon="android-search" placeholder="请输入关键字..." style="width: 250px" @on-click="handleSearch"></Input>
                    </form>
                    
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
        <header class="layout-header__wrapper">
            <ul class="nav nav-tabs">
              <li role="presentation" class="active">
                <a href="#">Home</a>
              </li>
              <li role="presentation"><a href="#">Profile</a></li>
              <li role="presentation"><a href="#">Messages</a></li>
            </ul>
            <div class="nav-panel">
                aaa
            </div>
        </header>
    </div>
</template>
<script>

export default {
    data() {
        return {
            value4: "",
        }
    },
    methods:{
        handleSearch(){
            alert("搜索")
        }
    }
}
</script>
<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}

.layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}

.layout-ceiling {
    background: #464c5b;
    padding: 10px 0;
    overflow: hidden;
}

.layout-ceiling-main {
    /*float: right;
        margin-right: 15px;*/
    max-width: 1024px;
    margin: auto;
}

.layout-ceiling-main a {
    color: #9ba7b5;
}

.ivu-input-icon {
    font-size: 26px !important;
}
.container-fluid{
  max-width: 1024px;
}
</style>
<style>
#header_top .ivu-input-icon {
    font-size: 22px !important;
}
</style>
