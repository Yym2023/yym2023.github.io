document.addEventListener('DOMContentLoaded', function () {
    var resources = document.querySelectorAll('img, audio')
    var totalResources = resources.length
    var loadedResources = 0
    console.log(totalResources)
    console.log(resources)

    // 更新进度显示函数
    function updateProgress() {
        var percentage = Math.round((loadedResources / totalResources) * 100)
        document.getElementById('loading-text1').textContent = `${percentage}%`
        // 获取并设置 :root {--loading-text:0%；}的值
        document.documentElement.style.setProperty('--loading-text', `${percentage}%`)
        console.log(percentage + '%')
        if (loadedResources === totalResources) {
            document.getElementById('loading').style.display = 'none'
            document.getElementById('app').style.display = 'block'
        }
    }

    // 为每个资源添加事件监听器
    resources.forEach(function (resource) {
        if (resource.tagName === 'LINK') {
            resource.onload = resource.onerror = function () {
                loadedResources++
                updateProgress()
            }
        } else {
            resource.onload = resource.onerror = function () {
                loadedResources++
                updateProgress()
            }
        }
    })

    updateProgress() // 初始化进度为0%
})