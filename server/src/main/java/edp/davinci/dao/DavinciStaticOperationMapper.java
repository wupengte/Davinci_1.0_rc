package edp.davinci.dao;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

@Component
public interface DavinciStaticOperationMapper {

    @Select({"select count(1) from user u left join davinci_statistic_visitor_operation d on u.username = #{username}\n" +
            "where u.id = d.user_id and d.action = 'visit'"})
    int selVisitNumByName(@Param("username") String username);

    @Select({"select count(1) from user u left join davinci_statistic_visitor_operation d on u.username = #{username}\n" +
            "where u.id = d.user_id and d.action = 'download'"})
    int selDownNumByName(@Param("username") String username);

    @Select({"select count(1) from user u left join davinci_statistic_visitor_operation d on u.username = #{username}\n" +
            "where u.id = d.user_id and d.action = 'login'"})
    int selLoginNumByName(@Param("username") String username);
}
