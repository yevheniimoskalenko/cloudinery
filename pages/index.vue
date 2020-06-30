<template>
  <div class="upload">
    <el-upload
      ref="upload"
      class="upload-demo"
      action="http://localhost:3000/api/cloudinery"
      :auto-upload="false"
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
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit()
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
}
</style>
