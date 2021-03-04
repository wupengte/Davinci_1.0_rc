package edp.davinci.dao;


import edp.davinci.dto.staticDto.DurationInfo;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

@Component
public interface DavinciStaticDurationMapper {

    //SELECT +
//        d.user_id,
//        u.username,
//        sum( d.end_time - d.start_time )
//        FROM
//        davinci_statistic_duration d
//        LEFT JOIN user u
//        ON d.user_id = u.id
//        WHERE
//        d.user_id = 2
//        GROUP BY
//        d.usr_id
//        AND u.username
    /**
    select d.user_id, u.username, sum(d.end_time-d.start_time) duration
    from davinci_statistic_duration d left join user u on d.user_id = u.id
    where d.user_id=2 group by d.user_id, u.username
     **/
    @Select({"select d.user_id as user_id, u.username as username, sum(d.end_time-d.start_time) as duration " +
            "from davinci_statistic_duration d " +
            "left join user u  on d.user_id=u.id " +
            "where d.user_id=#{userId} " +
            "group by d.user_id and u.username"})
    DurationInfo selCurDurationByName(@Param("userId") Long userId);

}

