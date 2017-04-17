<template>
	<div>
		<header>
			<h2><center>注册</center></h2>
		</header>
		<div class="content">
			<div id="register">
					<p>当前正在进行第 {{ current + 1 }} 步</p>
					<Steps :current="current">
		        <Step title="登录信息">
		        	
		        </Step>
		        <Step title="详细信息">
		        		<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
						        <Form-item label="姓名" prop="name">
						            <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
						        </Form-item>
						        <Form-item label="邮箱" prop="mail">
						            <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
						        </Form-item>
						        <Form-item label="城市" prop="city">
						            <Select v-model="formValidate.city" placeholder="请选择所在地">
						                <Option value="beijing">北京市</Option>
						                <Option value="shanghai">上海市</Option>
						                <Option value="shenzhen">深圳市</Option>
						            </Select>
						        </Form-item>
						        <Form-item label="选择日期">
						            <Row>
						                <Col span="11">
						                    <Form-item prop="date">
						                        <Date-picker type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
						                    </Form-item>
						                </Col>
						                <Col span="2" style="text-align: center">-</Col>
						                <Col span="11">
						                    <Form-item prop="time">
						                        <Time-picker type="time" placeholder="选择时间" v-model="formValidate.time"></Time-picker>
						                    </Form-item>
						                </Col>
						            </Row>
						        </Form-item>
						        <Form-item label="性别" prop="gender">
						            <Radio-group v-model="formValidate.gender">
						                <Radio label="male">男</Radio>
						                <Radio label="female">女</Radio>
						            </Radio-group>
						        </Form-item>
						        <Form-item label="爱好" prop="interest">
						            <Checkbox-group v-model="formValidate.interest">
						                <Checkbox label="吃饭"></Checkbox>
						                <Checkbox label="睡觉"></Checkbox>
						                <Checkbox label="跑步"></Checkbox>
						                <Checkbox label="看电影"></Checkbox>
						            </Checkbox-group>
						        </Form-item>
						        <Form-item label="介绍" prop="desc">
						            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
						        </Form-item>
						        <Form-item>
						            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
						            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
						        </Form-item>
						    </Form>
		        </Step>
		    </Steps>
		    <i-button type="primary" @click="next">下一步</i-button>
				
			</div>
		</div>
		
		
	</div>
</template>
<script>
	export default{
		data(){
			return{
				current: 0,
				formValidate: {
            name: '',
            mail: '',
            city: '',
            gender: '',
            interest: [],
            date: '',
            time: '',
            desc: ''
        },
        ruleValidate: {
            name: [
                { required: true, message: '姓名不能为空', trigger: 'blur' }
            ],
            mail: [
                { required: true, message: '邮箱不能为空', trigger: 'blur' },
                { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
            ],
            city: [
                { required: true, message: '请选择城市', trigger: 'change' }
            ],
            gender: [
                { required: true, message: '请选择性别', trigger: 'change' }
            ],
            interest: [
                { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
            ],
            date: [
                { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
            ],
            time: [
                { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
            ],
            desc: [
                { required: true, message: '请输入个人介绍', trigger: 'blur' },
                { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
            ]
        }
			}
		},
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        },
        next () {
            if (this.current == 3) {
                this.current = 0;
            } else {
                this.current += 1;
            }
        }
    }
	}
</script>
<style>
	header{
		margin: 30px 0;
	}
	.content{
		max-width: 700px; 
		margin: auto;
	}
	#register{
		border: 1px solid;
		padding: 10px 20px 10px 0;
		border: 1px solid #eee;
    border-radius: 6px;
    margin-bottom: 20px;
    position: relative;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
	}
	#register:hover {
    box-shadow: 0 2px 7px rgba(0,0,0,.15);
    border-color: transparent;
    position: relative;
	}
</style>