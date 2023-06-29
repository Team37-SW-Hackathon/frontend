<template>
    <div>
        <div
            id = "drop"
            @dragenter="handleDragEnter"
            @dragover="handleDragOver"
            @dragleave="handleDragLeave"
            @drop="handleDrop"
        >
            <p>업로드할 파일을 드래그 해주세요.</p>
            <input type="file" ref="fileInput" multiple style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer">
        </div>
        <ul>
            <li v-for="file in files" :key="file.name">
                {(file.name)}
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    data() {
        return {
            files: [],
        };
    },
    methods: {
        handleDragEnter(event) {
            event.preventDefault();
            event.target.classList.add("dargover");
        },
        handleDragOver(event) {
        event.preventDefault();
        },
        handleDragLeave(event) {
        event.target.classList.remove("dragover");
        },
        handleDrop(event) {
        event.preventDefault();
        event.target.classList.remove("dragover");

        const fileList = event.dataTransfer.files;
        this.handleFiles(fileList);
        },
        handleFileSelect(event) {
            const fileList = event.target.files;
            this.handleFiles(fileList);
            this.$refs.fileInput.value = null; 
        },
        handleFiles(fileList) {
            for (let i = 0; i < fileList.length; i++) {
                const file = fileList[i];
                if (file.type === "application/pdf") {
                    this.files.push(file);
                }
            }   
        }
    },
};
</script>

