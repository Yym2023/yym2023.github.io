document.addEventListener('DOMContentLoaded', function () {
    var resources = document.querySelectorAll('img, audio, link[rel="stylesheet"]')
    var totalResources = resources.length
    var loadedResources = 1

    // 更新进度显示函数
    function updateProgress() {
        var percentage = Math.round((loadedResources / totalResources) * 100)
        document.getElementById('progress-text').textContent = `${percentage}%`
        console.log(percentage + '%')
        if (loadedResources === totalResources) {
            document.getElementById('progress-container').style.display = 'none'
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
