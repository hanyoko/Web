<!-- 초 삭제 -->

<td>${item.lecStartDt.substring(0, 10).replace("-", ".")}~${item.lecEndDt.substring(0, 10).replace("-", ".")}</td>


<td>
    <fmt:parseDate value="${item.regDtCh}" var="parsedStartd" pattern="yyyy-MM-dd HH/mm/ss"/>
    <fmt:formatDate value="${parsedStartd}" pattern="yyyy.MM.dd a HH:mm" var="startd" />
    ${startd}
</td>


<td>
    <fmt:parseDate value="${item.regDtCh}" var="parsedStartd" pattern="yyyy-MM-dd HH/mm/ss"/>
    <fmt:formatDate value="${parsedStartd}" pattern="yyyy.MM.dd a HH:mm" var="startd" />
    ${startd}
</td>