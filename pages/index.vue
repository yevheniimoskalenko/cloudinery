<template>
  <div class="upload">
    <el-upload
      ref="upload"
      class="upload-demo"
      action="http://localhost:3000/api/cloudinery"
      :auto-upload="false"
      :on-success="hendleSuccess"
    >
      <el-button slot="trigger" size="small" type="primary"
        >select file</el-button
      >
      <el-button
        style="margin-left: 10px;"
        size="small"
        type="success"
        @click="submitUpload"
        >upload to server</el-button
      >
      <div slot="tip" class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </el-upload>
    <div v-for="(image, index) in images" :key="index" class="img">
      <img :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      images: []
    }
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit()
    },
    hendleSuccess(response, file, fileList) {
      this.images.push(response.secure_url)
      console.group(`response`)
      console.log(response)
      console.groupEnd()
    }
  },
  head: {
    title: 'Add file in cloudinery'
  }
}
</script>
<style lang="scss" scoped>
.upload {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
