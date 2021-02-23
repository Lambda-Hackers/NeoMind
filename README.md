# NeoMind
devote to an open, synergistic and editable mind map

## 思维导图和makedown对应关系
### 范例如下
```markdown
# 根节点
我是根节点
![img]
## 父节点
&指向父节点
父节点1

### 子节点1_1
!line:指向子节点1_1
重载子节点
### 子节点1_2
## 父节点
!line:指向父节点
父节点2


# CSS
root:{
color:red;
}
root-child1:{
color:blue;
}
root-child1-child2:{
color:yellow;
}
```

确认需求：
1、源码用makedown
2、样式用css
3、图片生成默认生成svg

界面确认：
1、上面一排为 【文件】，【编辑】，【帮助】（具体功能待定）
2、下面一排界面左下角为【思维导图】，【源码】，【样式】

其它确认：
文字编码：默认为utf-8

