<!-- 초 삭제 -->

<!-- substring / replace -->
<td>${item.lecStartDt.substring(0, 10).replace("-", ".")}~${item.lecEndDt.substring(0, 10).replace("-", ".")}</td>

<!-- <fmt:parseDate /> / <fmt:formatDate /> -->
<td>
    <fmt:parseDate value="${item.regDtCh}" var="parsedStartd" pattern="yyyy-MM-dd HH/mm/ss"/>
    <fmt:formatDate value="${parsedStartd}" pattern="yyyy.MM.dd a HH:mm" var="startd" />
    ${startd}
</td>